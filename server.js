
// app.listen(8002, function(){
//     console.log(`app listening on port 8002!`)
// });


const fs = require('fs')

const express = require('express')
const cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())


////////////////////////

const jscssVersion = 4 // 静态文件版本号，用于清除缓存

////////////////////////


const cnf = require('./config.js');

var allPageObjs = null
var allLangObjs = null
var allPageCaches = {}



function main() {
    let isDev = cnf.env == 'develop'

    // load
    allPageObjs = LoadAllPages()


    // express run
    if(isDev) {
        app.use(express['static']('./static'));
    }else{
        // nginx setting
    }
    // 首页
    app.get("/",function (req, res) {
        // 判断是否为移动端
        var homepgn = "home"
        if(isMobileReq(req)){
            homepgn = 'index' // 移动端适配
        }
        res.send( RenderTargetPage(req, res, homepgn, isDev) )
    })
    for(let pgn in allPageObjs){
        // all page
        app.get("/" + pgn,function (req, res) {
            res.send( RenderTargetPage(req, res, pgn, isDev) )
        })
    }
    // listen
    app.listen(cnf.http_port, function(){
        console.log(`listening on port ${cnf.http_port}!`)
    });
    

}

function isMobileReq(req) {
    var agent = req.headers["user-agent"]
    if(!agent) {
        return false
    }
    var deviceAgent = agent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if(agentID){
        return true
    }else{
        return false
    }
}

// 执行
main()


//////////////////////////////////


const langsets = {
    "en_US": "English",
    "fr_FR": "Français",
    "zh_CN": "简体中文",
}



// 展示页面
function RenderTargetPage(req, res, pgname, forcereload) {
    // console.log(req.cookies)
    req.query = req.query || {}
    req.cookies = req.cookies || {}
    // 语言
    let lang = {key: "en_US", show: "English"}
    let stl = req.query.lang || req.cookies.lang || cnf.default_language
    if(langsets[stl]){
        lang.key = stl
        lang.show = langsets[stl]
        res.cookie('lang', stl, { expires: new Date(Date.now() + 90000000000), httpOnly: true })
    }
    // 检查缓存
    if(!forcereload && allPageCaches[pgname] && allPageCaches[pgname][lang.key]) {
        return allPageCaches[pgname][lang.key]
    }
    allPageCaches[pgname] = allPageCaches[pgname] || {}
    if(forcereload || !allLangObjs) {
        allLangObjs = LoadAllLanguages(cnf.default_language, forcereload)
        // console.log(allLangObjs)
    }
    if(forcereload || !allPageObjs) {
        allPageObjs = LoadAllPages()
        // console.log(allPageObjs)
    }
    // 展示
    // 递归查找父页面
    let tarpg = allPageObjs[pgname]
    if( !tarpg) {
        return "404 not find."
    }
    var jscssnames = [pgname]
    var realhtmcon = tarpg.htm
    var temppg = tarpg
    while(true){
        let hdline = temppg.htm.substr(0, 50).match(/<!--\:BASE\:(\S+)-->/i)
        let basepgname = hdline && hdline[1] ? hdline[1] : null
        // console.log(basepgname)
        if(!basepgname || !allPageObjs[basepgname]) {
            break
        }
        let bspg = allPageObjs[basepgname]
        realhtmcon = bspg.htm.replace("<!--:CONTENT:-->", realhtmcon)
        jscssnames.unshift(basepgname)
        temppg = bspg // prev
    }
    // 替换 js css
    let jslinks = ''
    let csslinks = ''
    for(let i in jscssnames) {
        let name = jscssnames[i]
        jslinks  += '\n<script src="/jscss/'+name+'.js?v='+jscssVersion+'"></script>'
        csslinks += '\n<link rel="stylesheet" href="/jscss/'+name+'.css?v='+jscssVersion+'">'
    }
    realhtmcon = realhtmcon.replace('</head>', csslinks + '\n</head>')
    realhtmcon = realhtmcon.replace('</body>',  jslinks + '\n</body>')
    // console.log(realhtmcon)
    let renderhtml = tppl(realhtmcon, {
        languse: lang,
        lang: allLangObjs[lang.key],
    })
    // console.log(renderhtml)
    if(!forcereload) {
    // 缓存
        allPageCaches[pgname][lang.key] = renderhtml
    }
    // 返回
    return renderhtml
}

// 加载所有页面
function LoadAllPages() {
    // 创建基础目录
    let staticjscssdir = './static/jscss/'
    fs.mkdirSync(staticjscssdir, {recursive: true})

    let bsdir = './page'
    let pages = {}

    function load(pages, pgname, dir, lv) {
        let dirfiles = readDirFileSync(dir) 
        // console.log(dirfiles)
        for(let i in dirfiles.dirs){
            let di = dirfiles.dirs[i]
            if(di == '_frame') {
                continue
            }
            pages[di] = {}
            // 遍历
            load(pages[di], di, dir + '/' + di, lv+1)
        }
        if( pgname && lv > 0 ){
            // 读取
            let conjs = ''
            let concss = ''
            pages['htm'] = ''
            for(let i in dirfiles.files){
                let fi = dirfiles.files[i]
                let realfi = dir + '/' + fi
                let ficon = fs.readFileSync(realfi,{encoding:'utf8'}).toString()
                if(fi.endsWith('.js')) {
                    conjs += ficon + '\n'
                }else if(fi.endsWith('.css')) {
                    concss += ficon + '\n'
                }else if(fi.endsWith('.htm')) {
                    pages['htm'] += ficon + '\n'
                }
                // 写入 js css
                fs.writeFileSync(staticjscssdir + pgname + '.js', conjs)
                fs.writeFileSync(staticjscssdir + pgname + '.css', concss)
            }
        }
    }
    // 递归加载
    load(pages, null, bsdir + '/_frame', 0)
    load(pages, null, bsdir, 0)
    // 返回
    return pages
}




// 加载所有语言
function LoadAllLanguages(default_language, forcereload) {
    let bsdir = './language'
    let languages = {}

    function load(languages, dir) {
        let dirfiles = readDirFileSync(dir) 
        // console.log(dirfiles)
        for(let i in dirfiles.dirs){
            let di = dirfiles.dirs[i]
            languages[di] = {}
            // 遍历
            load(languages[di], dir + '/' + di)
        }
        for(let i in dirfiles.files){
            let fi = dirfiles.files[i]
            // 读取
            if(fi.endsWith('.js')) {
                let k = fi.replace('.js', '')
                let modn = dir + '/' + fi
                if(forcereload) {
                    //删除对应的缓存内存
                    delete require.cache[require.resolve(modn)]
                }
                languages[k] = require(modn)
            }
        }
    }
    // 递归加载
    load(languages, bsdir)
    // 处理默认
    if(default_language && languages[default_language]) {
        let dflg = languages[default_language]
        // console.log(default_language)
        let newlangs = {}
        for(let i in languages) {
            let base = deepClone(dflg)
            deepMerge(base, languages[i])
            newlangs[i] = base
        }
        languages = newlangs
    }
    // 返回
    return languages
}


// 遍历目录 ret {dirs:[], files:[]}
function readDirFileSync(basedir)
{
    let bd = fs.opendirSync(basedir)
    let dirs = []
    let files = []
    while(true){
        let ddd = bd.readSync()
        if(!ddd) {
            break
        }
        if(ddd.isFile()){
            files.push(ddd.name)
        }else{
            dirs.push(ddd.name)
        }
    }
    bd.closeSync()
    return {dirs, files}
}


// 深拷贝
function deepClone(source) { 
    let result = {}
    for (let key in source) {
        result[key] = typeof source[key] === 'object' ? deepClone(source[key]): source[key];
    } 
    return result; 
}


// 深扩展
function deepMerge(dist, src) {
    for (let k in src) {
        let isobj = typeof src[k] === 'object'
        if(isobj){
            if(dist[k]) {
                deepMerge(dist[k], src[k])
            }else{
                dist[k] = deepClone(src[k])
            }
        }else{
            dist[k] = src[k]
        }
    }
}

/**
 * tppl.js 极致性能的 JS 模板引擎
 * Github：https://github.com/jojoin/tppl
 * 作者：杨捷  
 * 邮箱：yangjie@jojoin.com
 *
 * @param tpl {String}    模板字符串
 * @param data {Object}   模板数据（不传或为null时返回渲染方法）
 *
 * @return  {String}    渲染结果
 * @return  {Function}  渲染方法
 *
 */
function tppl(tpl, data){
  var fn =  function(d) {
      var i, k = [], v = [];
      for (i in d) {
          k.push(i);
          v.push(d[i]);
      };
      return (new Function(k, fn.$)).apply(d, v);
  };
  if(!fn.$){
      var tpls = tpl.split('[:');
      fn.$ = "var $=''";
      for(var t = 0;t < tpls.length;t++){
          var p = tpls[t].split(':]');
          if(t!=0){
              fn.$ += '='==p[0].charAt(0)
                ? "+("+p[0].substr(1)+")"
                : ";"+p[0].replace(/\r\n/g, '')+"$=$"
          }
          // 支持 <pre> 、 [::] 包裹的 js 代码
          fn.$ += "+'"+p[p.length-1].replace(/\'/g,"\\'").replace(/\r\n/g, '\\n').replace(/\n/g, '\\n').replace(/\r/g, '\\n')+"'";
      }
      fn.$ += ";return $;";
      // log(fn.$);
  }
  return data ? fn(data) : fn;
}

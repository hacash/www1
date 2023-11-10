const fs = require("fs")
const less = require('less')
const csso = require('csso')
const uglifyjs = require("uglify-js")
const md = require('markdown-it')({
    html: true,
    linkify: true,
});

const kx = global.koappx
const cnf = kx.config()
const cnfp = kx.paths()
const tppl = kx.util('tppl')

var docContents = {
    'en': {},
    'zh': {},
}

async function parseNavStyle() {
    var cssf = cnfp.app+"/component/navdoc/navstyle.less"
    , csscon = fs.readFileSync(cssf) + ""
    csscon = await less.render(csscon, {rewriteUrls: 'off'})
    csscon = csso.minify(csscon.css.toString())
    // console.log(csscon)
    // 
    var jsfc = cnfp.static+"/jslib/navstyle"
    , jscon = fs.readFileSync(jsfc+".js") + ""
    jscon = jscon.replace("/*--NAV-STYLE--*/", csscon.css)
    jscon = uglifyjs.minify(jscon).code
    fs.writeFileSync(jsfc+".min.js", jscon) 
}
parseNavStyle().then()


exports.components = [
    'html',
    'header',

    'navdoc',

    'footer',
    'tail',
]


exports.datas = async function(cnf, ctx)
{
    if(cnf.debug){
        await parseNavStyle()
    }

    // console.log(ctx.params)

    let is_nav = ctx.req.url.indexOf('/nav/')===0 
        || ctx.params.is_nav==='true'

    let p = ctx.params
    , name = p.name
    , dist_name = name.toLowerCase()
    , nav_or_doc = is_nav ? 'nav' : 'doc'
    , ldir = ctx.lang.use.split('_')[0] // en / zh
    , notfind = {
        'ptype': nav_or_doc,
        'doctt': '404',
        'doctip': `The Document "${name}" Not Find.`,
        'title': '404 Not Find',
    };
    // console.log(nav_or_doc)
    if(!name) {
        return notfind
    }

    // check cache
    let cache = docContents[ldir][name]
    if(cache && !cnf.debug){
        return cache
    }

    // read file
    let fn = `./${nav_or_doc}/${ldir}/${dist_name}.md`
    let fcon = ""
    try{
        fcon = fs.readFileSync(fn) + ""
    }catch(e){
        if(cnf.debug){
            console.log(e)
        }
        return notfind
    }
    let lines = fcon.split("\n")
    , mdc = lines.slice(2).join('\n')

    // tppl language
    // console.log(ctx.lang.data)
    mdc = tppl(mdc, {lang: ctx.lang.data})

    // result
    let result = {
        'ptype': nav_or_doc,
        'doctt': lines[0],
        'doctip': lines[1],
        'title': `${lines[0]} - ${lines[1]} - Document - Hacash.org`,
        'content': md.render(mdc),
    }

    // set cache
    docContents[ldir][name] = result

    // console.log(ctx.params)
    // ok
    return result
}

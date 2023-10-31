const fs = require("fs")
const md = require('markdown-it')({
    html: true,
    linkify: true,
});

var docContents = {
    'en': {},
    'zh': {},
}



exports.components = [
    'html',
    'header',

    'docstyle',

    'footer',
    'tail',
]


exports.datas = async function(cnf, ctx)
{

    let p = ctx.params
    , name = p.name
    , ldir = ctx.lang.use.split('_')[0] // en / zh
    , notfind = {
        'doctt': '404',
        'doctip': `The Document "${name}" Not Find.`,
        'title': '404 Not Find',
    };
    if(!name) {
        return notfind
    }

    // check cache
    let cache = docContents[ldir][name]
    if(cache){
        return cache
    }

    // read file
    let fn = `./doc/${ldir}/${name}.md`
    let fcon = ""
    try{
        fcon = fs.readFileSync(fn) + ""
    }catch(e){
        // console.log(e)
        return notfind
    }
    let lines = fcon.split("\n")
    , mdc = lines.slice(2).join('\n')

    // result
    let result = {
        'doctt': lines[0],
        'doctip': lines[1],
        'title': `${lines[0]} - ${lines[1]} - Document`,
        'content': md.render(mdc),
    }

    // set cache
    docContents[ldir][name] = result

    // ok
    return result
}

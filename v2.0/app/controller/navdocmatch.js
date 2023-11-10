const fs = require("fs")

var pathcaches = {}

async function renderNavDocViewer(cnf, ctx, next, is_nav, name) {
    ctx.params.is_nav = is_nav ? 'true' : false
    ctx.params.name = name
    await global.koappx.viewer_render('navdoc', cnf, ctx, next)
}


module.exports = async function(cnf, ctx, next){

    
    let q = ctx.query
    , navdocname = ctx.params.navdocmatch
    , render = async function(is_nav) {
        await renderNavDocViewer(cnf, ctx, next, is_nav, navdocname)
    }

    // console.log(pathcaches[navdocname], fs.existsSync(`./nav/zh/${navdocname}.md`))

    // cache
    if(pathcaches[navdocname] != undefined) {
        // ctx.body = navdocname + " cache has!"
        await render(pathcaches[navdocname])
        return
    }
    
    
    // find in disk
    var is_nav = false
    try{
    if(fs.existsSync(`./nav/en/${navdocname}.md`) || fs.existsSync(`./nav/zh/${navdocname}.md`)){
        is_nav = true
    }else if(fs.existsSync(`./doc/en/${navdocname}.md`) || fs.existsSync(`./doc/zh/${navdocname}.md`)){
        is_nav = false
    }else{
        is_nav = null
    }
    }catch(e){}
    pathcaches[navdocname] = is_nav

    // view
    await render(is_nav)
}

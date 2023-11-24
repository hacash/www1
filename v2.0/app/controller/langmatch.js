
module.exports = async function(cnf, ctx, next){

    var realurl = ctx.req.url + ''

    if(realurl.indexOf('/zh/')===0) {
        realurl = realurl.replace('/zh/', '/')
        // set lang
        ctx.cookies.set('lang', 'zh', {maxAge: 1000*60*60*24*30,path: '/'})
    }

    // console.log(realurl)

    // ok jump
    ctx.status = 302
    ctx.redirect(realurl)
    return
}
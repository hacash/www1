
    
exports.components = [
    'html',
    'header',

    'index',

    'footer',
    'tail',
]


exports.datas = async function(cnf, ctx)
{
    // let data_types = await ddd.getTypes()

    var q = ctx.query || {}

    if(ctx.req.url.indexOf('/zh') == 0 && !q.lang) {
        ctx.cookies.set('lang', 'zh_CN', {maxAge: 1000*60*60*24*30,path: '/'})
    }
    if(q.lang == 'en_US'){
        // ok jump
        ctx.status = 302
        ctx.redirect('/')
        return
    }
    
    return {
        // isMobile: types.isMobile(ctx.req),
        // numToThousands: utilnumber.numToThousands,
        is_index_page: true,
        title: null,
    }
}

    
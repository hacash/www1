
    
exports.components = [
    'html',
    'header',

    'pagestyle',
    'articles',

    'footer',
    'tail',
]


exports.datas = async function(cnf, ctx)
{
    // let data_types = await ddd.getTypes()
    
    return {
        // isMobile: types.isMobile(ctx.req),
        // numToThousands: utilnumber.numToThousands,
        title: "Articles & News - Hacash - Money, Payment and Store of Value"
    }
}

    
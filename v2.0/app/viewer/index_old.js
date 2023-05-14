
    
exports.components = [
    'html',
    'header',

    'index_old',

    'footer',
    'tail',
]


exports.datas = async function(cnf, ctx)
{
    // let data_types = await ddd.getTypes()
    
    // console.log(ctx.lang)

    return {
        // isMobile: types.isMobile(ctx.req),
        // numToThousands: utilnumber.numToThousands,
        title: "Hacash - Money, Payment and Store of Value"
    }
}

    

    
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
    
    // console.log(ctx.lang)

    return {
        // isMobile: types.isMobile(ctx.req),
        // numToThousands: utilnumber.numToThousands,
        is_index_page: true,
        title: "Hacash - A peer-to-peer of Money, Payment, Store of Value, DeFi and DApp Infrastructure."
    }
}

    
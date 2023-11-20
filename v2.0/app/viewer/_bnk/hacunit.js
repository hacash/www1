
    
exports.components = [
    'html',
    'header',

    'pagestyle',
    'hacunit',

    'footer',
    'tail',
]


exports.datas = async function(cnf, ctx)
{
    // let data_types = await ddd.getTypes()

    var hac_amount = (ctx.query || {}).hac_amount || ''
    
    return {
        // isMobile: types.isMobile(ctx.req),
        // numToThousands: utilnumber.numToThousands,
        hac_amount: hac_amount,
        title: "HAC Unit Format Description - Hacash - Money, Payment and Store of Value"
    }
}

    
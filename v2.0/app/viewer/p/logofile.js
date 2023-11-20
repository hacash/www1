
    
exports.components = [
    'html',
    'header',

    'p/logofile',

    'footer',
    'tail',
]


exports.datas = async function(cnf, ctx)
{
    // let data_types = await ddd.getTypes()
    
    return {
        // isMobile: types.isMobile(ctx.req),
        // numToThousands: utilnumber.numToThousands,
        title: "Logo design source file - Money, Payment and Store of Value"
    }
}

    
module.exports = {

    // page view
    '/': 'VIEW:index',
    '/zh': 'VIEW:index',


    '/hac_unit': 'VIEW:hacunit',

    // design andsvg icon
    '/design': 'VIEW:p/logofile',
    '/svg/:name.svg': 'svgs',

    // nav doc load
    '/doc/:name': 'VIEW:navdoc',
    '/nav/:name': 'VIEW:navdoc',
    '/:navdocmatch': 'navdocmatch',

    '/zh/:path': 'langmatch',

    // api test
    // '/api/data/get': 'api/data/get',
    // 'POST:/api/data/save': 'api/data/save',

    // bnk
    
    '/bnk/index_old': 'VIEW:index_old',

    '/bnk/get_started': 'VIEW:getstarted',
    '/bnk/channel': 'VIEW:chpay',
    '/bnk/channel_server': 'VIEW:chpayser',
    '/bnk/channel_wallet': 'VIEW:chpaywlt',

    '/bnk/articles': 'VIEW:articles',
    '/bnk/get_coin': 'VIEW:getcoin',
    '/bnk/develop': 'VIEW:develop',

    '/bnk/more_about': 'VIEW:moreabout',
}
    
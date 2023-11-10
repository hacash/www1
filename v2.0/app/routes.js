module.exports = {

    // page view
    '/': 'VIEW:index',
    '/index_old': 'VIEW:index_old',

    '/get_started': 'VIEW:getstarted',
    '/channel': 'VIEW:chpay',
    '/channel_server': 'VIEW:chpayser',
    '/channel_wallet': 'VIEW:chpaywlt',

    '/articles': 'VIEW:articles',
    '/get_coin': 'VIEW:getcoin',
    '/develop': 'VIEW:develop',

    '/hac_unit': 'VIEW:hacunit',

    '/more_about': 'VIEW:moreabout',
    '/design': 'VIEW:logofile',

    // nav doc load
    '/doc/:name': 'VIEW:navdoc',
    '/nav/:name': 'VIEW:navdoc',
    '/:navdocmatch': 'navdocmatch',

    // svg icon
    '/svg/:name.svg': 'svgs',

    // api test
    '/api/data/get': 'api/data/get',
    'POST:/api/data/save': 'api/data/save',

}
    
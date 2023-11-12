// console.log("tail lgst = ", tlgst)


var lcurl = location.href
, lgqs = "lang="+tlgst
;
lcurl = lcurl.replace(lgqs+'&', '').replace(lgqs, '').replace(/\?$/ig, '')
if(tlgst != "en_US"){
    var stl = tlgst.split('_')[0];
    console.log(lcurl)
    lcurl = lcurl.replace(new RegExp('\/'+stl+'$'), '')
    console.log(lcurl)
    var us = lcurl.split('/')
    us[2] += '/' + stl
    // console.log(us)
    lcurl = us.join('/')
    // console.log(lcurl)
}
lcurl = lcurl.replace(/\/$/ig, '')

// console.log("tail lcurl = ", lcurl)
history.replaceState(null,null,lcurl)








/////////////////////////////////////////////////////////////
// google translator split iframe

document.body.innerHTML = `

<iframe id="w1" src="https://translate.google.com.hk/?hl=zh-CN" width="100%" height="50%"></iframe>
<iframe id="w2" src="https://translate.google.com.hk/?hl=zh-CN" width="100%" height="50%"></iframe>

`;

function setnone(ifrs, clss) {
    for(var i in ifrs){
        var ifr = document.getElementById(ifrs[i])
        // console.log(ifr)
        for(var k in clss){
            ifr.contentDocument.getElementsByClassName(clss[k])[0].style.display = 'none'
        }
    }
}

setTimeout(function(){
    setnone(['w1','w2'], ['gb_Na','hgbeOc', 'VjFXz', 'VlPnLc'])
}, 5000)


/////////////////////////////////////////////////////////////
// bing translator split iframe

document.body.innerHTML = `

<iframe id="w1" src="https://cn.bing.com/translator" width="100%" height="50%"></iframe>
<iframe id="w2" src="https://cn.bing.com/translator" width="100%" height="50%"></iframe>

`;
drapwrp = function(ifrcd, elm) {
    var d = ifrcd.getElementById(elm)
    d.style.width = 'auto'
    d.style.margin = '0'
}
setnone = function(ifrs, clss) {
    for(var i in ifrs){
        var ifrcd = document.getElementById(ifrs[i]).contentDocument
        // console.log(ifr.contentDocument)
        for(var k in clss){
            ifrcd.getElementsByClassName(clss[k])[0].style.display = 'none'
            drapwrp(ifrcd, 'tt_translatorHome')
            drapwrp(ifrcd, 't_lang_attr')
        }
    }
}
setTimeout(function(){
    setnone(['w1','w2'], ['desktop_header','t_navigation', 'tta_phraseb', 'b_footer'])
}, 2000)
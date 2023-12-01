


/////////////////////////////////////////////////////////////
// bing translator split iframe

document.body.innerHTML = `

<iframe id="w1" src="https://cn.bing.com/translator" width="100%" height="50%"></iframe>
<iframe id="w2" src="https://cn.bing.com/translator" width="100%" height="50%"></iframe>

`;

function setnone(ifrs, clss) {
    for(var i in ifrs){
        var ifr = document.getElementById(ifrs[i])
        console.log(ifr.contentDocument)
        for(var k in clss){
            ifr.contentDocument.getElementsByClassName(clss[k])[0].style.display = 'none'
        }
    }
}

setTimeout(function(){
    setnone(['w1','w2'], ['desktop_header','t_navigation', 'tta_phraseb', 'b_footer'])
}, 2000)
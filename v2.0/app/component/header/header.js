/* header.js */



var topbar = $id('topbar')
, tpnvc = $id('tpnvc')
, mbm = $class(topbar, 'mbm')[0]
, mbm_acting = false
mbm.onclick = function() {
    mbm.innerHTML = '<span class="ftic">'+(mbm_acting?'&#xe61d;':'&#xe63b;')+'</span>'
    mbm_acting = !mbm_acting
    tpnvc.style.display = mbm_acting ? 'flex' : 'none'

}

if(topbar.offsetWidth < 640) {
    $class(topbar, 'container')[0].appendChild(tpnvc)
}



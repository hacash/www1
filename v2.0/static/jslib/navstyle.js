
var nav_style = `/*--NAV-STYLE--*/`;


/* onload */

window.onload = function(){

insertStyle(nav_style)

var $mdcon = $id("mdcon") 


var pgtt = $id('pgtt')
, bgt = $clas(pgtt, 'bgt')
, h = $clas(pgtt, 'h')
, p = $clas(pgtt, 'p')
, pim = GeoPattern.generate(h.innerHTML, {baseColor: '#000000'})
bgt.style.backgroundImage =  pim.toDataUrl()
setTimeout(function(){ p.classList.add('show') }, 500)

// parse nav items
var parse_nav = function(elm) {
    return parseNavDocItems(elm, function(a){
        return `<a class="nit" href="${a[0]}"><div class="box">
            <img class="bgic" src="/cssimg/navicos/wallet.svg" />
            <div class="hdw"><img src="/cssimg/navicos/wallet.svg" /></div>
            <div class="h"><h1>${a[1]}</h1></div>
            <div class="p"><p>${a[2]}<p></div>
        </div></a>`
    })
}
var navs = $mdcon.getElementsByClassName("nav");
$each(navs, function(elm){
    // do parse
    elm.innerHTML = parse_nav(elm)
    // setTimeout(setHeadImage, 15, elm)
})

function setHeadImage(elm) {
    var nits = $class(elm, 'nit')
    // console.log(nits)
    for(var i=0;i<nits.length;i++){
        var it = nits[i] 
        , h = $clas(it, 'h')
        , p = $clas(it, 'p')
        , b = $clas(it, 'box')
        , pim = GeoPattern.generate(h.innerText, {baseColor: '#000000'})
        , hd = $clas(it, 'hd')
        , cl = pim.color
        // console.log(cl)
        h.style.color = cl
        p.style.color = cl+"88"
        b.style.borderColor = cl
        hd.style.backgroundImage =  pim.toDataUrl()
    }
}


// style
insertStyle(` #mdcon pre.nav { white-space: nowrap; } `)

};

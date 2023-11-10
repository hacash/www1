
var nav_style = `/*--NAV-STYLE--*/`;


/* onload */

window.onload = function(){

insertStyle(nav_style)

var $mdcon = $id("mdcon") 

// start star back canvas
var starbg = $id("starbg");
var starback =new Starback(starbg,{width:starbg.clientWidth,height:starbg.clientHeight,speed:3,frequency:16,slope:{x:6,y:5 },directionX:1,spread:.3,randomOpacity:true,backgroundColor:["#4ab7b711","#4ab7b755","#4a7eb466"]})
starback.generateStar(20)


// parse nav items
var parse_nav = function(elm) {
    return parseNavDocItems(elm, function(a){
        return `<a class="nit" href="${a[0]}"><div class="box">
        <div class="hdwp"><div class="hd"><div class="ftic">&#xe6ec;</div></div></div>
        <div class="text"><h1 class="h">${a[1]}</h1>
        <span class="p">${a[2]}</span></div>
    <div class="cor"></div></div></a>`
    })
}
var navs = $mdcon.getElementsByClassName("nav");
$each(navs, function(elm){
    // do parse
    elm.innerHTML = parse_nav(elm)
    setTimeout(setHeadImage, 15, elm)
})

function setHeadImage(elm) {
    var nits = $class(elm, 'nit')
    // console.log(nits)
    for(var i=0;i<nits.length;i++){
        var it = nits[i] 
        , h = $clas(it, 'h')
        , p = $clas(it, 'p')
        , b = $clas(it, 'box')
        , pim = GeoPattern.generate(h.innerText)
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

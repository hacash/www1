
function drawRandomBarBackgrand(wrap, direction, width, height, bshd, color, linecolor, linewidth) {
    height = parseInt(height) || 0
    bshd = parseInt(bshd) || 0
    var tthd = height + bshd
    var wd = parseInt(wrap.offsetWidth)
    // console.log(wd)
    var step = wd/height + 1
    , points = [wd+',0', '0,0']
    // console.log(direction)
    if(direction=='up'){
        var dy = tthd
        points = [wd+','+dy, '0,'+dy]
        bshd = 0
        // console.log(points)
    }
    var rdn = function(){
        return parseInt(Math.random() * height)
    }
    var linespts = []
    for(var i=0; i<step; i++){
        var bsl = i * width
        , x = bsl + rdn()
        , y = bshd + rdn()
        points.push(x + ',' + y)
        if(linecolor) {
            var x = bsl + rdn()
            , y = bshd + rdn()
            linespts.push(x + ',' + y)
        }

    }
    var svg = '<svg  height="'+(tthd)+'" width="'+wd+'"><polygon points="'+points.join(' ')+' " style="fill:'+color+';stroke:none;stroke-width:0"/>'
    if(linecolor) {
        svg += '<polyline points="'+linespts.join(' ')+'" style="fill:none;stroke:'+linecolor+';stroke-width:'+linewidth+'" />'
    }
    wrap.innerHTML = svg + '</svg>'
}

var navadd = is_nav ? 15 : 0;
drawRandomBarBackgrand($id('tpbg'), 'up', 30+navadd, 30-navadd, 0, '#ffffff')
// console.log(30+navadd, 30-navadd)

// parse items
function parseNavDocItems(elm, call, pb) {
    var its = elm.innerHTML.split("\n\n")
    , html = []
    for(var i in its){
        var a = its[i].split("\n")
        html.push(call(a))
    }
    if(pb){
        var pdn = html.length % pb
        while(pdn) {
            html.push(`<div class="padiv"></div>`)
            pdn--
        }
    }
    return html.join("\n")
}

var $mdcon = $id("mdcon")


// pre.links
var links = $mdcon.getElementsByClassName("links");
$each(links, function(elm){
    // do parse
    elm.innerHTML = parseNavDocItems(elm, function(a){
        var lglk = a[2]
        if(!lglk){        
            return `<a class="link" href="${a[1]}"><b class="ftic">&#xe62c; ${a[0]}</b></a>`
        }
        // image logo
        var lgurl = (lglk.indexOf('http')==0||lglk.indexOf('/')==0) 
            ? lglk : `/image/exlgs/${lglk}.png`
            , desc = a[3] ? `<p>${a[3]}</p>` : ''
            console.log(a)
        return `<a class="lglk" href="${a[1]}">
            <div class="lg"><img src="${lgurl}" /></div>
            <h5>${a[0]}</h5>${desc}
        </a>`
    })
})


// nowrap style
insertStyle(`pre.links { white-space: initial; } `)


// a set target="_blank"
setTimeout(function(){
    $each($mdcon.getElementsByTagName('a'), function(a){
        a.setAttribute('target', "_blank")
    })
},777)


// lazy load image

function checkImgs(clsn) {
    const imgs = Array.from(document.querySelectorAll("."+clsn));
    imgs.forEach(item => io.observe(item));
}

function loadImg(el) {
    if (!el.src) {
        const source = el.dataset.src;
        el.src = source;
    }
}

const io = new IntersectionObserver(ioes => {
    ioes.forEach(ioe => {
        const el = ioe.target;
        const intersectionRatio = ioe.intersectionRatio;
        if (intersectionRatio > 0 && intersectionRatio <= 1) {
            loadImg(el);
        }
        el.onload = el.onerror = () => io.unobserve(el);
    });
});


checkImgs("lazy");

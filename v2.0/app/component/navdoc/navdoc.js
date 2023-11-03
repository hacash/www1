
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
drawRandomBarBackgrand($id('tpbg'), 'down', 30+navadd, 30-navadd, 0, '#161928')
// console.log(30+navadd, 30-navadd)

// 
var mdcon = $id("mdcon")
, allas = mdcon.getElementsByTagName('a')

// a set target="_blank"
for(var i=0; i<allas.length; i++){
    allas[i].setAttribute('target', "_blank")
}


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

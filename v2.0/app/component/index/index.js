var tpbg = $id('tpbg')
, btbg = $id('btbg')
;
setTimeout(function(){
    tpbg.classList.toggle('ok')
    btbg.classList.toggle('ok')
}, 50)

drawRandomBarBackgrand(tpbg, 'down', 30, 0, '#f7af34')
drawRandomBarBackgrand(btbg, 'up', 100, 0, '#000', '#f7af3466', 1)

function drawRandomBarBackgrand(wrap, direction, height, bshd, color, linecolor, linewidth) {
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
        var bsl = i * height
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



// screen
(function(){
    var screen = $id('screen')
    , intro = $class(screen, 'intro')[0]
    , cvimgs = $class(screen, 'cvimgs')[0]
    , cvbg = $class(screen, 'cvbg')[0]
    , rlgs = $class(screen, 'rlgs')[0]
    , shadow = $class(screen, 'shadow')[0]
    , itexts = intro.getAttribute('intros').split('|')
    , itidx = 1
    ;
    function showAni(newt) {
        var n = 0
        var timer = setInterval(function(){
            n++
            if(n>newt.length){
                clearInterval(timer)
                return
            }
            intro.innerText = newt.substring(0, n)
        },1000/newt.length)
    }
    function hideAni(oldt) {
        var n = oldt.length
        var timer = setInterval(function(){
            n--
            intro.innerText = oldt.substring(0, n)
            if(n<=0){
                clearInterval(timer)
            }
        },400/oldt.length)
    }
    function editAnimation(newtext) {
        var oldtext = intro.innerText
        hideAni(oldtext)
        setTimeout(showAni, 500, newtext)
    }
    function showIntro() {
        if(itidx >= itexts.length) {
            itidx = 0
        }
        // show
        editAnimation(itexts[itidx])
        itidx ++
    }
    setInterval(showIntro, 4400)

    // show
    setTimeout(function(){ 
        cvimgs.classList.toggle('clear')
        cvbg.classList.toggle('hide')
        rlgs.classList.toggle('away')
    }, 100)
    // show
    setTimeout(function(){ 
        shadow.classList.toggle('none') 
    }, 3000)
    
    // setInterval(tgclcvs, 20000)

})();



var intro = $id('intro')
, morebtn = $class(intro, 'more')[0]
, detail = $id('detail')
;

morebtn.onclick = function() {
    this.style.display = 'none'
    detail.style.display = 'block'
}



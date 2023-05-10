
drawRandomBarBackgrand($id('tpbg'), 'down', 30, 0, '#f7af34')
drawRandomBarBackgrand($id('btbg'), 'up', 100, 50, '#000')

function drawRandomBarBackgrand(wrap, direction, height, bshd, color) {
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
    for(var i=0; i<step; i++){
        var bsl = i * height
        , x = bsl + rdn()
        , y = bshd + rdn()
        points.push(x + ',' + y)
    }
    var svg = '<svg  height="'+(tthd)+'" width="'+wd+'"><polygon points="'+points.join(' ')+' " style="fill:'+color+';stroke:none;stroke-width:0"/></svg>'
    wrap.innerHTML = svg
}



// screen
(function(){
    var screen = $id('screen')
    , intro = $class(screen, 'intro')[0]
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

})();
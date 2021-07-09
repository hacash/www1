var windowHeight = window.innerHeight;

var biglogoElm = document.getElementsByClassName('biglogo')[0]
var canvasElm = document.getElementById('canvas');
var bglineBoxElm = document.getElementsByClassName('bgline_box')[0];
var tblGElm = document.getElementsByClassName('tblG')[0];
var topbarElm = document.getElementById('topbar');
var bkttElms = document.getElementsByClassName('bktt');
var fdwordElms = document.getElementsByClassName('fdword');


// 修改 screen 高度
var screenElm = document.getElementById('screen');
screenElm.style.height = windowHeight;

// 回到顶部
bkttElms[0].onclick = function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0
}

// 显示动画
function showBgCanvas(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    // 显示动画
    startCanvas(w - 16, h) // 宽度减去滚动条
}


// 加载完成，开启动画
window.onload = function(){
    setTimeout(function(){

        // return

        // 隐藏loading
        var loading = document.getElementsByClassName('loading')
        loading[0].style.display = "none"

        // 显示 box
        var screen_box = document.getElementsByClassName('screen_box')
        screen_box[0].classList.remove("hide")


        // 初始化背景动画
        showBgCanvas()
        
        // 显示 biglogo
        biglogoElm.classList.remove("small")

        // 显示背景动画
        setTimeout(function(){
            canvasElm.classList.add("show")
        }, 1800)

        // 显示 topbar
        setTimeout(function(){
            topbarElm.classList.remove("hide")
        }, 12000)

        // 显示 内容
        setTimeout(function(){
            var tt = 2
            function tg(a, ti) {
                fdwordElms[a].classList.remove("pw" + (ti-1))
                fdwordElms[a].classList.add("pw" + ti)
            }
            tg(0, 1)
            setTimeout(function(){
                tg(0, 2)
                tg(1, 1)
                setTimeout(function(){
                    tg(0, 3)
                    tg(1, 2)
                    tg(2, 1)
                    setTimeout(function(){
                        tg(0, 4)
                        tg(1, 3)
                        tg(2, 2)
                        tg(3, 1)
                    }, tt*1000)
                }, tt*1000)
            }, tt*1000)
        }, 5000)

    }, 1)
}


// 滚动监听
window.onscroll = function(){

    var top = document.documentElement.scrollTop||document.body.scrollTop;


    // logo 变小
    var blgbase = (windowHeight/2)
    var blgper = (blgbase - top) / blgbase 
    if(blgper >= 0 ){
        // console.log(blgper)
        biglogoElm.style.transform = "scale("+blgper+")"
        canvasElm.style.opacity = blgper
    }
    var tblgstl = "rotate("+(top/6)+"deg)"
    // console.log(tblGElm)
    // console.log("scale(1.25) rotate("+((top/2)%360)+"deg)")
    if(top > windowHeight - 25){
        topbarElm.classList.add("appear")
    }else{
        topbarElm.classList.remove("appear")
        tblgstl += " scale(1.25)"
    }
    tblGElm.style.transform = tblgstl

    // 收起内容
    function fold(i, cn) {
        fdwordElms[i].classList.remove("pw"+cn)
        fdwordElms[i].classList.add("pw0")
    }
    function show(i, cn) {
        fdwordElms[i].classList.add("pw"+cn)
        fdwordElms[i].classList.remove("pw0")
    }
    if(top > blgbase/2){
        fold(0, 4)
        fold(1, 3)
        fold(2, 2)
        fold(3, 1)
    }else{
        show(0, 4)
        show(1, 3)
        show(2, 2)
        show(3, 1)
    }


}






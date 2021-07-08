var windowHeight = window.innerHeight;

var biglogoElm = document.getElementsByClassName('biglogo')[0]
var canvasElm = document.getElementById('canvas');
var bglineBoxElm = document.getElementsByClassName('bgline_box')[0];


// 修改 screen 高度
var screenElm = document.getElementById('screen');
screenElm.style.height = windowHeight;


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

    }, 1000)
}


// 滚动监听
window.onscroll = function(){

    var top = document.documentElement.scrollTop||document.body.scrollTop;


    // logo 变小
    var blgbase = (windowHeight/2)
    var blgper = (blgbase - top) / blgbase 
    if(blgper >= 0 ){
    console.log(blgper)
        biglogoElm.style.transform = "scale("+blgper+")"
        canvasElm.style.opacity = blgper
        bglineBoxElm.style.opacity = 1 - blgper
    }

}






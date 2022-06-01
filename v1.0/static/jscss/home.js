

function startCanvas(input_width, input_height) {


//宇宙特效
"use strict";
var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
//   w = canvas.width = window.innerWidth,
//   h = canvas.height = window.innerHeight,
  w = canvas.width = input_width,
  h = canvas.height = input_height,

  hue = 70, // 217 // 星星颜色
  stars = [],
  count = 0,
  maxStars = 120;//星星数量

 console.log("绘制画布大小："+w +","+ h)
//  alert("绘制画布大小："+w +","+ h)

var canvas2 = document.createElement('canvas'),
  ctx2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;
var half = canvas2.width / 2,
  gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0.025, '#CCC');
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient2.addColorStop(1, 'transparent');

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

// End cache

function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
  var max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max));
  return diameter / 2;
  //星星移动范围，值越大范围越小，
}

var Star = function() {

  this.orbitRadius = random(maxOrbit(w, h));
  this.radius = random(60, this.orbitRadius) / 8; 
  //星星大小
  this.orbitX = w / 2;
  this.orbitY = h / 2;
  this.timePassed = random(0, maxStars);
  this.speed = random(this.orbitRadius) / 840000;  //星星移动速度
  this.alpha = random(2, 10) / 10;

  count++;
  stars[count] = this;
}

Star.prototype.draw = function() {
  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
    y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
    twinkle = random(10);

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
  }

  ctx.globalAlpha = this.alpha;
  ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
  this.timePassed += this.speed;
}

for (var i = 0; i < maxStars; i++) {
  new Star();
}

function animation() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 0.5; //尾巴
  ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
  ctx.fillRect(0, 0, w, h)

  ctx.globalCompositeOperation = 'lighter';
  for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw();
  };

  window.requestAnimationFrame(animation);
}

animation();




}



var windowHeight = window.innerHeight;

var biglogoElm = document.getElementsByClassName('biglogo')[0]
var canvasElm = document.getElementById('canvas');
var bglineBoxElm = document.getElementsByClassName('bgline_box')[0];
var tblGElm = document.getElementsByClassName('tblG')[0];
var topbarElm = document.getElementById('topbar');
var bkttElms = document.getElementsByClassName('bktt');
var fdwordElms = document.getElementsByClassName('fdword');
var nextdElm = document.getElementsByClassName('nextd')[0];
var bgftcvrElm = document.getElementsByClassName('bgftcvr')[0];




// 修改 screen 高度
var screenElm = document.getElementById('screen');
screenElm.style.height = windowHeight;

// 回到顶部
bkttElms[0].onclick = function(){
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
}

// 了解更多
nextdElm.onclick = function (){
    window.scrollTo({ 
        top: windowHeight / 2, 
        behavior: "smooth" 
    });
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
        }, 1000)

        // 显示 topbar
        setTimeout(function(){
            topbarElm.classList.remove("hide")
        }, 6000)

        // 显示 内容
        setTimeout(function(){

            function tgw(a, ti) {
                fdwordElms[a].classList.remove("pw0")
                fdwordElms[a].classList.add("pw" + ti)
            }

            var tt = 1

            tgw(0, 1)
            setTimeout(function(){
                tgw(1, 2)
                setTimeout(function(){
                    tgw(2, 3)
                    setTimeout(function(){
                        tgw(3, 4)
                    }, tt*1000)
                }, tt*1000)
            }, tt*1000)
        }, 2000)

        // 显示 next
        setTimeout(function(){
            nextdElm.classList.remove("hide")
        }, 7000)

        // 隐藏字符背景
        setTimeout(function(){
            bgftcvrElm.classList.add("hide")
        }, 10000)

    }, 100)
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
    if(top > windowHeight/3){
        fold(0, 1)
        fold(1, 2)
        fold(2, 3)
        fold(3, 4)
    }else{
        show(0, 1)
        show(1, 2)
        show(2, 3)
        show(3, 4)
    }

    // 收起滚动提示
    nextdElm.style.bottom = "-"+(top/blgbase*50)+"px"
    nextdElm.style.opacity = (1-top/blgbase)


}







///////////////////////////////////////////////////////////////////////////////////




/** traits */
function traits(){

    var traitsElm = document.getElementById('traits');
    var unfoldElm = traitsElm.getElementsByClassName("unfold")[0];
    unfoldElm.onclick = function(){
        unfoldElm.classList.add("bkgr")
        var box = traitsElm.getElementsByClassName("box")[0],
            hei = 300
            heiset = {
                "zh_CN": 188,
                "en_US": 280,
            };
        hei = heiset[languse_key] || 300
        box.style.height = hei + "px"
        setTimeout(function(){ 
            traitsElm.getElementsByClassName("note")[0].style.display = "block"
            unfoldElm.classList.add("fnbg")
        }, 400)
    }

};
traits();










///////////////////////////////////////////////////////////////////////////////////




/** detail */
function detail(){

    var traitsElm = document.getElementById('detail');
    var unfoldElm = traitsElm.getElementsByClassName("unfold")[0];
    unfoldElm.onclick = function(){
        unfoldElm.classList.add("hide")
        setTimeout(function(){  
            unfoldElm.style.display = "none"
            var fds = traitsElm.getElementsByClassName("fold")
            for(var i in fds) {
                var li = fds[i]
                if(li && li.style){
                    li.style.display = "block"
                }
            }
            traitsElm.classList.add("allshow")
        }, 500)
    }

};
detail();





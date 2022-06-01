
/*


// app
var VueAppOrders = {
    data() {
        return {
            xxx:123,
        }
    },
    methods: {
        func(){

        },
    }
}

// mount
Vue.createApp(VueAppOrders).mount('#orders');



*/


function getUrlQuery(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return null;
 }

 function numToThousands(num) {
    return num.toString().replace(/d+/, function(n) {
       return n.replace(/(d)(?=(?:d{3})+$)/g, '$1,');
    });
 };


// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) 
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;

}

function tableToList(table) {
    if(!table || !table.keys || table.keys.length == 0){
        return [] // 空表
    }
   let list = []
   for(let r in table.rows){
       let row = table.rows[r]
       let obj = {}
       for(let i in table.keys){
           let k = table.keys[i]
           obj[k] = row[i]
       }
       list.push(obj)
   }
   return list
}



// Piazzolla font load
/*
setTimeout(function(){
    var d = document.createElement('div')
    d.innerHTML = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Imbue:opsz@10..100&display=swap" rel="stylesheet">'
    document.body.appendChild(d)
}, 5)
*/
/* header.js */


// 显示 topbar
setTimeout(function(){
    var topbarElm = document.getElementById('topbar');
    topbarElm.classList.remove("hide")
}, 500);
/* index.js */

(function(){

    var sce = document.getElementById('screen')
    , video = sce.getElementsByClassName('video')[0]
    , vcon = video.getElementsByClassName('vcon')[0]
    , close = video.getElementsByClassName('close')[0]
    , learn = sce.getElementsByClassName('learn')[0]
    , nextv = learn.getElementsByClassName('next')[0]
    , svbtns = learn.getElementsByClassName('svbtn')
    , vidx = 0
    ;

    // 关闭视频
    close.onclick = function(){
        vcon.innerHTML = ""
        video.classList.remove('show')
        setTimeout(function(){
            sce.classList.remove('video')
            setTimeout(function(){
                sce.classList.add('show')
                learn.style.display = 'block'
            }, 800)
        }, 800)
    }

    // 切换视频
    nextv.onclick = function(){
        var ni = vidx + 1
        if(ni >= svbtns.length){
            ni = 0
        }
        function slide(vidx, ni) {
            // hide cur btn
            svbtns[vidx].className = "svbtn hide left"
            setTimeout(function(){
                svbtns[vidx].className = "svbtn hide right"
            }, 500)
            // show next btn
            svbtns[ni].className = "svbtn"
        }
        slide(vidx, ni)
        vidx = ni
    }

    // 显示视频
    function showVideo(info) {
        learn.style.display = 'none'
        sce.classList.remove('show')
        vcon.innerHTML = '<iframe src="https://www.youtube.com/embed/'+info+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        setTimeout(function(){
            sce.classList.add('video')
            setTimeout(function(){
                video.classList.add('show')
            }, 500)
        }, 800)
    }
    // 点击查看视频
    for(var i=0; i<svbtns.length; i++) {
        svbtns[i].onclick = function() {
            // console.log(this.getAttribute('vinfo'))
            showVideo(this.getAttribute('vinfo'))
        }
    }

    // 动画特效
    setTimeout(function(){
        sce.classList.add('show')
        // svbtns[0].click()
    }, 1000)
    setTimeout(function(){
        sce.getElementsByClassName('name')[0].classList.add('ani')
    }, 2000)
    setTimeout(function(){
        learn.classList.add('show')
    }, 2000)

    
    


    // sce.classList.remove('show')
    // sce.classList.add('video')


})();/* footer.js */
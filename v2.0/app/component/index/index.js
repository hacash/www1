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


})();
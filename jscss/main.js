(function(){

var mbmenu = document.getElementById('mbmenu')
, header = document.getElementById('header')
, mbopen = false


mbmenu.onclick = function(e){
    var cls = 'mobile'
    if(mbopen){
        cls = ''
    }
    header.setAttribute('class', cls)
    mbopen = !mbopen
    e.stopPropagation()
}

window.onclick = function(){
    header.setAttribute('class', '')
    mbopen = false
}



})();



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


checkImgs("lazy")
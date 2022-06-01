

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

// 手册中心 topbar
(function(){
  var ttn = "Manual Center"
  if(window.location.href.indexOf("_zh.html") > 0){
    ttn = "使用手册中心"
  }
  var topbar = document.createElement("div");
  topbar.id = "topbar";
  topbar.innerHTML = '<div class="container"><div class="lg">ㄜ </div><h1>Hacash '+ttn+'</h1></div>'
  document.body.insertBefore(topbar, document.body.firstChild)
})();

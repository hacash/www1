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


(function(){

    var topdonate = document.getElementById("topdonate")
    var help = topdonate.getElementsByClassName("help")[0]
    var helpbtn = topdonate.getElementsByClassName("btn")[0]
    var helpisshow = false

    
    help.addEventListener("click", function(e){
        e.stopPropagation()
    })

    topdonate.addEventListener("click", function(){
        help.setAttribute("style", helpisshow ? "" : "display: block;")
        helpisshow = !helpisshow
    })




})()
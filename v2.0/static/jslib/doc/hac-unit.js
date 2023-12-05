
setTimeout(function(){ 

insertStyle(`

.tbmb {
    display: inline-block;
    padding: 20px 0;
    margin-left: 20px;
}
.tbmb.f {
    margin: 0;
}
.tbmb th, .tbmb td {
    font-size: 12px;
}
.tbmb td {
    font-size: 15px !important;
}

.fmtshow .container {
    margin-top: 20px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 2px 2px 6px #00000044;
    border-radius: 4px;
}
.fmtshow u, .fmtshow b {
    font-size: 26px !important;
    color: #f7af34 !important;
}
.fmtshow b {
    color: cadetblue;
    font-weight: bold;
}


.fmtbox {
    padding: 30px;
    background: #eee;
}
.fmtbox input, .fmtbox button {
    margin: 0;
    padding: 10px;
    line-height: 42px;
    height: 42px;
    display: inline-block;
    vertical-align: top;
}
.fmtbox button {
    padding: 0px 20px;
    color: #fff !important;
    background: #f7af34;
}
.fmtbox .res {   
    padding: 10px;
    color: cadetblue;
    font-size: 22px;
    height: 32px;
    line-height: 32px;
    display: block;
}
.fmtbox span {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
    font-size: 14px;
    line-height: 32px;
    height: 32px;
    color: #999;
}
    



@media screen and (max-width: 640px) {
    .container {
        padding: 0;
        margin: 10px;
        width: auto;
    }
    .tpmg {
        display: none;
    }
    .tbmb {
        margin: 0;
        padding: 10px;
        display: block;
    }
    .tbmb table {
        width: 100%;
    }
    .fmtbox {
        padding: 10px;
    }
    .fmtbox input {
        width: 240px;
    }
    .fmtshow  .container {
        margin-top: 40px;
    }
    .fmtshow u, .fmtshow b {
        font-size: 16px;
    }
}


`)


var cvfmt = $id('cvfmt')
, input = $clas(cvfmt, 'in')
, submit = $clas(cvfmt,'btn')
, result = $clas(cvfmt,'res')
, result = $clas(cvfmt,'res')
, fmtshow = $clas('fmtshow')
, amount = getUrlQuery('amount') || null

submit.onclick = function(){
    var s = input.value
    result.innerHTML = convertUnitOfHAC(s)
}


if(amount) {
    amount = decodeURI(amount)
    input.value = amount
    submit.click()
    // show
    var ss = convertUnitOfHAC(amount)
    fmtshow.innerHTML = '<div class="container"><p><u>'+amount+'<u> = <b>'+ss+'</b></p></div>'
}


function convertUnitOfHAC(stuff){
    var clrstr = stuff.replace(/[^:\d]+/ig, '').split(':')
    if(clrstr.length == 2) {
        var n =  '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+clrstr[0]
        var nl = n.length
        var f = parseInt(clrstr[1])
        var fu = f - 248
        if(fu > 0){
            n += '0'.repeat(fu)
        }else if(fu < 0){
            var ist = nl + fu
            n = n.slice(0, ist) + '.' + n.slice(ist)
        }
        n = n.replace(/^0+/ig, '')
        if(n[0] == '.') {
            n = '0'+n
        }
        return n+' HAC'
    }else{
        return '[format error]'
    }
}







},15);
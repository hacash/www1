var cvfmt = $id('cvfmt')
, input = $class(cvfmt, 'in')[0]
, submit = $class(cvfmt,'btn')[0]
, result = $class(cvfmt,'res')[0]
, result = $class(cvfmt,'res')[0]
, fmtshow = $class('fmtshow')[0]

submit.onclick = function(){
    var s = input.value
    result.innerHTML = convertUnitOfHAC(s)
}


if(hac_amount) {
    input.value = hac_amount
    submit.click()
    // show
    var ss = convertUnitOfHAC(hac_amount)
    fmtshow.innerHTML = '<div class="container"><p><u>'+hac_amount+'<u> = <b>'+ss+'</b></p></div>'
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


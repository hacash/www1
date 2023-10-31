const fs = require("fs")
const mime = require('mime-types')

let svgfiles = {
    "logof": "*",
    "hac": "*",
    "hac-s": "*",
    "btc": "*",
    "btc-s": "*",
    "hacd": "*",
    "hacd-s": "*",
}

module.exports = async function(cnf, ctx, next){

    let q = ctx.query
    , fill = q.fill
    , name = ctx.params.name
    if(!svgfiles[name]){
        name = "hac"
    }
    if(svgfiles[name].length==1) {
        let fn = `./static/cssimg/svgs/${name}.svg`
        // console.log(fn)
        svgfiles[name] = {
            mime: mime.lookup(fn),
            file: fs.readFileSync(fn)+"",
        }
    }
    let fo = svgfiles[name]
    let svgcon = fo.file
    if(fill){
        svgcon = svgcon.replace(`fill: #f7af34`, `fill: #${fill}`)
    }

    // return
	ctx.set('content-type', fo.mime)
	ctx.set('cache-control', `max-age=500000`)
    ctx.body = svgcon
    
}
    
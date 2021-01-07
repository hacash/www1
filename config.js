const config = {
    env: "production",
    http_port: 8001,
    default_language: 'en_US', // 默认语言 zh_CN en_US
}




//////////////////////////////////




try{
    let dev = require('./config.use.js')
    for(let i in dev){
        config[i] = dev[i]
    }
}catch(e){}


module.exports = config

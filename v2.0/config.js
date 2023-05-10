module.exports = {
    debug: false,

    http_port: 8009,
    watch_restart_timeout: 0,

    // 使用的 mysql 数据库
    mysqldb: {
        connectionLimit : 10,
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database : 'hacash_trsdb',
    },

    
}
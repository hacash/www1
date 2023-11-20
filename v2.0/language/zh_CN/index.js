let cn = s => s//.replace(/\s+/ig, '')
    , cm = s => cn(s).split(',')
    , cf = s => cn(s).split('/')
    , cb = s => cn(s).split('\n')
    ;
module.exports = {

    start: {
        ichs: cf('个人/矿工/创业者/艺术家/开发者'),
        opts: cf('购买相关代币/选择你的钱包/浏览区块数据'),
    }

}
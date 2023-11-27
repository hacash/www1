let cn = s => s//.replace(/\s+/ig, '')
    , cm = s => cn(s).split(',')
    , cf = s => cn(s).split('/')
    , cb = s => cn(s).split('\n')

module.exports = {

    support: {
        donate: "捐赠 HAC 给予 Hacash.org 支持：",
    },

    intro: '由三个PoW资产和三层扩容架构支撑开放金融和应用生态的加密健全货币系统',
    // intro2: '专注货币、支付、价值存储、DeFi 和 DApp 基础设施的点对点网络',
    
    desc: cf('是加密健全货币/由社区驱动/遵循比特币愿景/包含3个工作量证明货币/有世界第一个 PoW NFT/将兼容比特币/支持人类可读的DeFi合约/可抵抗51%算力攻击/具备可扩展性技术'),

    tnv: {
        ttls: cf('开始/学习/特色/资源'),
        start: cf('钱包/购买Hacash/浏览器/个人/矿工/创业者/开发者/艺术家/运行全节点'),
        learn: cf('HAC/HACD/BTC/Layer 1/Layer 2/Layer 3/白皮书'),
        feature: cf('工作量证明/购买力稳定币/开放金融基础设施/继承比特币/密码朋克愿景'),
        resource: cf('开发者导引/资料库/社区/生态/Github'),
    },
    
    ftr: {
        lgdsi: "图标设计资源",
        tlik: '链接',
        tcmn: '社区',
        tres: "资源",
    }




}


let cn = s => s//.replace(/\s+/ig, '')
    , cm = s => cn(s).split(',')
    , cf = s => cn(s).split('/')
    , cb = s => cn(s).split('\n')
    ;
module.exports = {

    start: {
        ichs: cf('Individual/Miner/Business/Artist/Developer'),
        opts: cf('Buy Hacash/Choose your wallet/Explore blockchain'),
    },

    value: [
        cf(`公平和创新的POW资产/Hacash是具备首个PoW NFT和PoW Flatcoin的Layer 1，发明的烽火台协议能有效杜绝PoW资产早期面临51%攻击的风险，另外采用X16RS全新算法和斐波那契先增后减的机制保证资产公平分发，而不是现成的挖矿算法和老套的减半机制。/了解 PoW`),
        cf(`购买力稳定的货币体系/Hacash购买力的稳定不通过锚定任何指数和法币，而是遵循黄金购买力稳定的逻辑。实现了比特币无法在去中心化和防止双花的基础上，可根据市场调节供应来维持购买力稳定的货币体系。/了解更多`),
        cf(`比特币的下一个篇章/通过Hacash单向转移技术让比特币以去中心化方式解藕为货币和协议。在货币层面，比特币价值可得到延续，是调节Hacash货币供应有效方式之一。在协议方面，比特币放弃原协议，使用和原协议去中心化和安全程度相当，更具扩展性的Hacasch。/继承比特币`),
        cf(`全新的开放金融基础设施/Hacash是一个具有健全货币体系，图灵完备合约，支持各种扩容技术，可选隐私和去中心化股权账户的Layer 1，无准入门槛，任何地方的任何人都可来共建和享受可持续的金融生态。/了解更多`),
        cf(`密码朋克愿景的实现/一位无名氏在2018年留下了Hacash的白皮书后消失，白皮书提出了同时实现去中心化和货币供应调节维持购买力稳定的方法，其货币体系中的HAC实现了戴伟的B-Money，HACD实现了哈尔芬尼的加密交易卡和尼克斯萨博的Bit Gold，以及给BTC指明了可持续的未来。/了解更多`),
    ],

    c3l3: {
        ct: '3 PoW Coins Form A Sound Money System',
        cp1: 'Store of<br/>Value',
        cli1: cf('The first ever PoW NFT/NFT version of Bitcoin/Mining is only getting harder/Burn HAC via bidding'),
        cp2: 'Large-scale<br/>Payment',
        cli2: cf('Low volatility/Market-based supply adjustment, circulation can increase, decrease and stabilize/Non-algorithmic, non-collateralized'),
        cp3: 'Move to<br/>Hacash',
        cli3: cf('Adjusting HAC supply/From one-way transfers, not from cross-chain bridges'),
        cnt: 'All 3 coins are fairly distributed, no pre-mined and without any centralized management',

        lt: '3 Layers Supports A Large Economic System',
        lp3: 'DApp',
        lli3: cf('Multi-Chain system and DApps'), 
        lp2: 'Payment',
        lli2: cf('Payments with unlimited scalability'),
        lp1: 'Money',
        lli1: cf('Currency creation, distribution and settlement'),
        lnt: `The layer 3 is built upon the foundation of Hacash's first and second layers.`,
    },

    intro: {
        ps: [
            'Hacash是一个继承了中本聪愿景，和比特币一样去中心化和安全的点对点的货币系统。但Hacash使比特币无法在完全去中心化的情况下，按需调节货币供应实现购买力稳定成为了可能。整个货币体系由HACD，BTC，HAC三种不同特质的工作量证明（PoW）币组成，它们公平分发，没有预先挖矿或被中心化管理。',
            'Hacash也是一个可编程的PoW Layer 1。但Hacash能避免以太坊智能合约安全性能低和状态爆炸导致去中心化程度降低的问题。整个技术架构分为三层，二层为实现大规模即时支付的通道链支付网络，三层为支持各种Rollup和多链技术的协议。'
        ],
        lis: cf(`低门槛运行全节点，保证去中心化和安全/无中心化调节，结合比特币的购买力稳定货币体系/可无限扩展的图灵完备基础设施/恪守加密朋克去中心化、自由和隐私保护的理念`)

    }


}   
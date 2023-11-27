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
        cf(`Equity and Innovation POW Assets/Hacash is the Layer 1 with the first PoW NFT and PoW Flatcoin, and the invented Watchtower protocol can effectively prevent the risk of 51% attack on PoW assets in the early stage. In addition, it adopts the new X16RS algorithm and the Fibonacci mechanism of first increase and then decrease to ensure the fair distribution of assets. Not off-the-shelf mining algorithms and old-fashioned halving mechanisms./Learn More About PoW`),
        cf(`A Sound Monetary with Stable Purchasing Power/The stability of Hacash purchasing power is not achieved by anchoring any index and fiat currency, It follows the logic that gold's purchasing power is stable. A monetary system in which supply can be adjusted according to the market to maintain a stable purchasing power has been realized./Learn More`),
        cf(`The Next Chapter of Bitcoin/Hacash one-way transfer technology allows bitcoin to be decoupled into a currency and protocol in a decentralized manner. At the monetary level, the value of Bitcoin can be continued, which is one of the effective ways to regulate the money supply of Hacash. In terms of protocol, Bitcoin abandons the original protocol and uses Hacash, which is more scalable and has the same degree of decentralization and security as the original protocol./BTC Inheritor`),
        cf(`A New Open Financial Infrastructure/Hacash is a Layer 1 with a sound monetary system, programmable contracts, support for various scaling technologies, optional privacy and decentralized equity accounts, no barriers to entry, and anyone, anywhere, can build and enjoy a sustainable financial ecosystem./Learn More`),
        cf(`The Realization of Cypherpunk Vision/An anonymous person disappeared in 2018 after leaving a Hacash whitepaper, which proposed a way to achieve both decentralization and no money supply regulation to maintain purchasing power stability, with the HAC in its monetary system implementing Dai Wei's B-Money, HACD implementing Hal Finney's crypto trading card and Nick Szabo's Bit Gold.   And points to a sustainable future for BTC./Learn More`),
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
            `Hacash is a peer-to-peer currency system that inherits Satoshi Nakamoto's vision and is as decentralized and secure as Bitcoin.  However, Hacash makes it possible to adjust the money supply on demand to achieve purchasing power stability in the case of complete decentralization.  The entire monetary system consists of three different characteristics of HACD, BTC, HAC proof-of-work (PoW) coins, which are fairly distributed, not pre-mined or centrally managed.`,
            `Hacash is also a programmable PoW Layer 1.  But Hacash can avoid the low security performance of Ethereum smart contracts and state explosion resulting in a reduced degree of decentralization.  The whole technical architecture is divided into three layers, the second layer is the channel chain payment network to achieve large-scale instant payment, and the third layer is the protocol supporting various Rollup and multi-chain technologies.`
        ],
        lis: cf(`Low threshold to run full nodes to ensure decentralization and security/Decentralized and no regulation, combined with the purchasing power of bitcoin to stabilize the monetary system/Infinitely scalable programmable crypto infrastructure/Adhere to the concepts of decentralization, freedom, and privacy protection of crypto punk`)

    }


}   
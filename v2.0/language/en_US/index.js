let cn = s => s//.replace(/\s+/ig, '')
    , cm = s => cn(s).split(',')
    , cf = s => cn(s).split('/')
    , cb = s => cn(s).split('\n')
    ;
module.exports = {

    start: {
        ichs: cf('Individual/Miner/Business/Artist/Developer'),
        opts: cf('Buy Hacash/Choose your wallet/Explore blockchain'),
    }

}   
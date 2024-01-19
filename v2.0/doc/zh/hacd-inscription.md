HACD 铭文
铭刻、艺术绑定与代币化


HACD最初由6个字母组成，HIP-5给出了HACD的第一个视觉效果。HIP-8产生HACD的第二视觉效果。

HACD 已经具备 3 种标准艺术形态，分别为 HIP-5 、HIP-8 和 HIP-9。 从理论上讲，HACD的新视觉效果需要满足一定的条件和标准，以保证生成艺术作品的最终公平性，我们称之为 [HIP-10 PoW Art Standard](https://github.com/hacash/paper/blob/master/HIP/diamond/PoW_Art_Standard.mediawiki) 

在此基础上，为了支持更加灵活和丰富的艺术形态和艺术家参与方式，社区提出了 [HIP-15](https://github.com/hacash/paper/blob/master/HIP/diamond/hacd_inscription.md) ，其主要机制是向每枚 HACD 铭刻一些可堆叠、可擦除的铭文列表。

有关 HIP-15 提案的讨论发生在 [HacashTalk](https://hacashtalk.com/t/hip15-hacd-secondary-artistic-creation-signature-engraving-and-erasure/184) 和 [Discord](https://discord.com/channels/757976908653920299/802807729584209920/1189460916534771822) 上，并最终总结为一个可实施的执行文档： [HIP-15 HACD Inscription](https://github.com/hacash/paper/blob/master/HIP/diamond/hacd_inscription.md)


---

### 铭刻方法

HIP-15 将从区块高度 518000 开始生效，需要下载最新的离线桌面钱包来铭刻：

- [Hacash 软件发布日志与下载中心](https://github.com/hacash/node/releases)

下载后运行 `hacash_desktop_offline_wallet_...` 钱包，选择 `Create/Clean HACD inscription` 选项：

<img class="lazy ctw" data-src="/image/tobeminer/hip15-btn.png" />

然后来到创建铭文的界面。铭刻 HACD 与发起转账本质上类似，都是通过创建一笔交易后提交至区块链确认。通过填写下方的内容来创建一笔 HACD 铭刻交易：

<img class="lazy ctw" data-src="/image/tobeminer/hip15-crtx.png" />

等到区块链确认后，将在对应 HACD 的详情界面看到对应铭刻的内容：

<img class="lazy ctw" data-src="/image/tobeminer/hip15-show.png" />

HIP-15 的实施将极大的拓宽 HACD 在收藏、艺术和代币化方面的功能和价值，更多的创新和玩法期待社区的发现。
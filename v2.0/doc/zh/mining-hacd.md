HACD 挖掘
挖矿和竞价 HACD



HACD（区块钻石）是 Hacash 网络上另一种异质 、不可分割的货币。其详细介绍可参看：[什么是区块钻石](https://github.com/hacash/paper/blob/master/draft/whitepaper.cn.md#5-%E5%8C%BA%E5%9D%97%E9%92%BB%E7%9F%B3) 和 [钻石采掘算法](https://github.com/hacash/paper/blob/master/draft/whitepaper.cn.md#3-%E9%92%BB%E7%9F%B3%E9%87%87%E6%8E%98) 。

## 获得 HAC

先导提示：[HACD](/HACD) 的挖矿，需要使用 Hacash 网络中的另一个货币 [HAC](/HAC) 竞价，参与链上拍卖成功才能得到最终确认。可以通过挖矿和购买获取 HAC：

<pre class="links">
HAC 挖矿
/mining-HAC

购买 HAC
/get#HAC
</pre>

## 运行全节点

HACD 仅支持全节点方式挖矿。在开始 HACD 挖掘之前，需要运行全节点并且同步完所有区块数据。

<pre class="links">
运行全节点
/run-full-node
</pre>


## 开始挖矿

全节点软件内置了 HACD 挖矿功能，只需要修改少量配置，即可自动开始挖矿。与 [HAC 全节点挖矿](/mining-HAC#fullnode) 过程相同。

`hacash.config.ini` 文件是Hacash全节点程序必备的配置文件，包含各种配置。只需要修改配置文件中`[diamondminer]` 项下的若干参数：

<pre class="log cnf">
<b>[diamondminer]</b>
<i>enable</i> = <s>true</s>
<i>supervene</i> = <s>6</s>
<i>fee_amount</i> = <s>ㄜ1:247</s>
<i>fee_password</i> = <s>abc123456</s>
<i>rewards</i> = <s>1AVRuFXNFi3rdMrPH4hdqSgFrEBnWisWaS</s>
<i>continued</i> = <s>false</s>
<i>autobid</i> = <s>true</s>
<i>autobid_check_interval</i> = <s>5</s>
<i>autobid_fee_max</i> = <s>ㄜ10:248</s>
<i>autobid_fee_margin</i> = <s>ㄜ5:247</s>
</pre>

其中 `supervene` 是多线程并行挖矿的并发线程数量，与挖HAC币的 `supervene` 参数意义相同；`fee_amount` 参数是为挖掘出的钻石设置的默认手续费竞价的数量，如果一个区块内同时挖出多枚钻石，则手续费报价最高的钻石将被打包进区块被全网确认生效，同时期的其他钻石将被视为无效并丢弃，大家重新再次从头开始挖掘下一枚钻石。

`fee_password` 是付出手续费竞价的账户地址的密码或私钥（必须确保账户内拥有 `fee_amount` 设置的余额，挖掘出的钻石才能被打包生效）。

`rewards` 参数设置的地址为挖出钻石后的奖励地址，也就是新挖出钻石的归属地址。  `continued` 表示是否在挖出一枚钻石后仍然持续挖掘钻石，这将会导致可能在一个周期内挖出多枚钻石，你可以从中选择你认为更有价值的钻石来出局更高的报价。

通过 [区块浏览器](https://explorer.hacash.org?lang=[:=lang.useset:]) 可以实时查看当前周期内挖出的所有钻石的手续费竞价排名。

<p class="note">注意：一个周期（5个区块）只有手续费排名的第一位的唯一一枚钻石将被打包生效，其他钻石将被直接丢弃。如果需要将排名提升至第一位，则可在 <a href="https://wallet.hacash.org?lang=[:=lang.useset:]">在线钱包</a> 里重新设置对应钻石的手续费。<br/>（钻石挖矿的结果是一笔特殊的交易被打包进能被5整除的区块高度内，钻石挖掘后排名的手续费就是一笔交易的手续费）</p>

启动挖掘钻石的程序后，显示应如下：

<pre class="print">[Version] Hacash node software: 0.1.17(20231026.1), p2p compatible: block version[1], transaction type [2], action kind [12], repair num [1]
...
do diamond mining... number: 81128, supervene: 6, start worker: #1 #2 #4 #5 #6 #3
...
</pre>

通过设置 `autobid = true` 参数可以进行挖出钻石的程序自动竞价。其中 `fee_amount = ㄜ1:247` 表示挖出钻石的第一次报价，然后每隔十秒钟，程序自动检查一次当前最高报价的钻石出价，如果报价高于我的报价，则通过参数 `autobid_fee_margin = ㄜ2:247` 为报价步进值，自动出具高于最高钻石报价的价格，以始终保持自己挖出的钻石报价最高。参数 `autobid_fee_max = ㄜ10:248` 为我将为每一枚钻石出具的竞价上限，表示如果其他人竞价超过这个价格，我将停止竞价，而不会报出比这个数值更高的价格。`autobid_check_interval` 为每次检查竞价相隔时间的秒数，最低可以设为1秒。

<p class="note">【特别注意】自动竞价并不保证绝对能让你获得钻石，比如出现一下这些情况：<br/>
　　1. 在周期的末尾很晚才挖出钻石，来不及第一次报价，其他当前最高报价的钻石就已经打包进区块；<br/>
　　2. 刚好在十秒自动报价的间隙，别人的钻石被打包；<br/> 
　　3. 网络同步卡顿导致你的程序没有获取到别人的报价。<br/>
如果你想要最大可能获得钻石，请尽量优化以下内容：<br/>
　　1. 升级到更稳定（链路更优质但不需要带宽更大）的网络；<br/>
　　2. 尽量出具更高的首次报价和竞价步进值，以便于在很少的几次报价之后就超越别人设置的竞价最高值，从而打败别人。<br/>
　　3. 请不要设置过于小的报价步进值（`autobid_fee_margin` 参数），过于小的手续费更改将低于系统可以识别的精度，从而不能改变你的竞价排序。<br/>
</p>
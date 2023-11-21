HAC 挖矿
加入矿池、使用GPU、Solo等多种方式参与挖掘






在首次开始挖矿之前，需要 [创建钱包地址](https://wallet.hacash.org?lang=[:=lang.useset:])，用于收取 HAC 的挖矿奖励。

## 加入矿池

Hacash 社区有多个矿池可供选择，只需访问矿池网站，下载对应的挖矿工具，就可以轻松开始挖掘：

<pre class="links">
WoW_Pool
https://hacpool.com
wowpool
运营时间长

.Diamonds Pool
https://www.hacash.diamonds/pool
hxdm
支持GPU挖矿
</pre>

不同的矿池有不同的结算规则和费率标准，详细请查看各个矿池服务的页面。

## 全节点挖矿

开始全节点挖矿之前，需要 [运行全节点](/run-full-node)，并等待所有区块数据同步完成。

全节点内置了挖矿功能，只需要修改少量配置，即可自动开始挖矿。`hacash.config.ini` 文件是Hacash全节点程序必备的配置文件，包含各种配置。只需要修改配置文件中`[miner]` 项下的三个参数：

<pre class="log cnf">
<b>[miner]</b>
<i>enable</i> = <s>true</s>
<i>supervene</i> = <s>1</s>
<i>rewards</i> = <s>1AVRuFXNFi3rdMrPH4hdqSgFrEBnWisWaS</s>
<i>message</i> = <s>unknown</s>
</pre>

其中，删除 `enable = true` 前面的分号 `;` 表示开启挖矿（分号 `;` 表示注释这一项，使其不生效，其他项配置比如 HACD 挖矿同理），`supervene` 参数表示同时启用多少个线程挖矿，一般来说与你的电脑的 CPU 核心数量一致，能发挥最大的计算能力。比如你的电脑 CPU 核心数量为 2 核， 则将 `supervene = 8` 改为 `supervene = 2`，如果为 4 核心则改为 `supervene = 4`，以此类推。这时计算机 CPU 的利用率为 100%。 一般建议留出一个核心用于其它计算：4核心则设置为3，8核心则设置为7。也可以根据你的情况自由设置，数值越小，CPU 利用率越低。此值不支持小数，最小为1，也不建议设置成比电脑 CPU 核心数量更大的值。

`rewards` 参数的字符串值，是 Hacash 的账户地址，这里用来收取挖矿产生的货币奖励。此地址必须通过钱包生成，有特定的格式，可以使用 [在线钱包](https://wallet.hacash.org?lang=[:=lang.useset:])，通过严格保密并做好备份的密码，或者随机创建的私钥来生成账户地址。`message` 为区块播报者标识，一般仅矿池需要设置。

<p class="note">注意：需要等待区块同步完成之后，再修改配置，然后重启全节点，挖矿配置才能生效</p>

## 自建矿池

如果在内网有多台机器同时挖矿，可以在局域网自建私有矿池，与搭建公共矿池方法相同，请参见：

<pre class="links">
搭建矿池
/mining-pool
</pre>

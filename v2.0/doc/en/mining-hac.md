HAC Mining
加入矿池、使用GPU、Solo等多种方式参与挖掘






在首次开始挖矿之前，需要 [创建钱包地址](https://wallet.hacash.org?lang=[:=lang.useset:])，用于收取 HAC 的挖矿奖励。


<a name="pool"></a>

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

不同的矿池有不同的结算规则和费率标准，详细请查看各个矿池服务的页面。以 `.org` 测试矿池为例，给出加入矿池挖矿的教程，首先下载矿池挖矿软件:

<a class="btn" href="https://download.hacash.org/miner_pool_worker_hacash_windows64.zip" target="_blank">⇩ Windows 64位</a>　
<a class="btn orange" href="https://download.hacash.org/miner_pool_worker_hacash_ubuntu64.zip" target="_blank">⇩ Ubuntu 64位</a>　
<a class="btn gray" href="https://download.hacash.org/miner_pool_worker_hacash_macos64.zip" target="_blank">⇩ MacOS 64位</a>

下载的挖矿软件压缩文件中包含一个可执行文件和一个 `.ini` 格式配置文件，类似：

<pre class="log">
1 │ miner_pool_worker_2023_11_02_01.exe │ 3.6MB
2 │ poolworker.config.ini               │ 347B
</pre>

压缩包内的 `poolworker.config.ini` 文件是矿工程序必备的配置文件，用编辑器打开，可看到内部内容为：


<pre class="log cnf">
<i>pool</i> = <s>182.92.163.225:3339</s>
<i>rewards</i> = <s>1AVRuFXNFi3rdMrPH4hdqSgFrEBnWisWaS</s>
<i>supervene</i> = <s>8</s>
</pre>

`pool` 参数是矿池的地址，表示要连接的服务器的IP和端口。配置文件中的默认IP地址 182.92.163.225:3339 是一个长期运行且有效的矿池地址，可以直接使用，由 hacash.org 运营。如果使用其他第三方矿池，请联系你的矿池服务商获取有效的IP连接地址。

<p class="note">请注意：有些矿池服务商的挖矿软件通过加密方法内置了 IP 地址，无需再单独填写设置</p>

`rewards` 参数的字符串，是 Hacash 的账户地址，这里用来收取挖矿产生的货币奖励。此地址必须通过密码生成，有特定的格式，自己手动修改拼凑的地址无效！你可以使用 在线钱包，通过只有你自己知晓并严格保密和做好备份的密码，或者随机创建的私钥，生成账户地址。此地址仅限一个。

其中 `supervene` 参数表示同时启用多少个线程挖矿，一般来说与你的电脑的 CPU 核心数量一致，能发挥最大的计算能力。比如你的电脑 CPU 核心数量为 2 核， 则将 `supervene = 8` 改为 `supervene = 2`，如果为 4 核心则改为 `supervene = 4`，以此类推。这时电脑 CPU 的利用率为 100%。一般建议留出一个核心用于其它计算：4核心则设置为3，8核心则设置为7。也可以根据你的情况自由设置，数值越小，CPU 利用率越低。此值不支持小数，最小为1。注意：不能设置成比电脑 CPU 核心数量更大的值，否则算力将极度降低。

修改完成并保存后，通过命令行或者双击运行，将看到以下类似打印信息：

<pre class="print">[Start] connect: 182.92.163.225:3339, rewards: 1AVRuFXNFi3rdMrPH4hdqSgFrEBnWisWaS, supervene: 8. 
connecting miner pool... ok.
do mining height:‹497921›, cbmn:1... 
</pre>

这时程序已经自动开始挖矿了，可打开任务管理器查看 CPU 的利用率，查看加入矿池挖矿算力的统计：[http://182.92.163.225:3340](http://182.92.163.225:3340)。如果使用第三方矿池，请联系你的矿池服务商查看实时的算力统计，和你应得的挖矿奖励的数额。



<a name="fullnode"></a>

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

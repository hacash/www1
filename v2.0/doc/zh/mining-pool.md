搭建 HAC 矿池
启动 HAC 矿池服务或建立私有矿池






## 运行全节点

搭建矿池之前，需要运行一个全节点，并同步完成所有区块数据。

<pre class="links">
运行全节点
/run-full-node
</pre>

## 开始搭建

全节点内置了基础的矿池挖矿功能，满足多台机器同时挖矿或者联合挖矿的需求。打开全节点配置文件 `hacash.config.ini` ，首先修改 `[miner]` 项下的配置，开启挖矿模式（启用方法为删除enable字段前的分号`;`字符）：

<pre class="log cnf">
<b>[miner]</b>
<i>enable</i> = <s>true</s>
<i>rewards</i> = <s>1MzNY1oA3kfgYi75zquj3SRUPYztzXHzK9</s>
<i>message</i> = <s>unknown</s>
</pre>

以上配置中， `rewards` 为矿池收取区块奖励的地址；`message` 为矿池播报方标记，可以自定义，用于识别区块由谁挖出，不超过16个字符。

然后再启用 `[minerpool]` 项下的 `enable` 字段，并按需修改其他字段：

<pre class="log cnf">
<b>[minerpool]</b>
<i>enable</i> = <s>true</s>
<i>data_dir</i> = <s>./hacash_minerpool_data</s>
<i>console_http_port</i> = <s>3340</s>
<i>listen_port</i> = <s>3339</s>
<i>max_connect</i> = <s>200</s>
<i>fee_percentage</i> = <s>0.05</s>
<i>rewards_password</i> = <s>123456</s>
</pre>

以上配置中，`console_http_port` 参数表示后台算力、地址列表查看网页的端口；`listen_port` 为矿池连接服务端口；`max_connect` 为最大连接数，数量视服务器配置而定；`fee_percentage` 是矿池服务费率，0.05表示收取 5% 服务费，0.01表示收取 1%；`rewards_password` 表示矿池自动打币的账户密码或私钥，并且账户地址必须与 `[miner]` 项下的 `rewards` 参数设置的地址相同。

修改完成后保存，重新启动全节点，都搭建好了一个矿池。使用公网 IP 或局域网地址即可链接矿池。连接方式请查看：

<pre class="links">
加入矿池挖矿
/mining-HAC#pool
</pre>




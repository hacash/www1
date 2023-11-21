运行 Hacash 全节点
只需两步，以最快的方式运行一个全节点




## 下载

选择对应操作系统下载Hacash全节点软件：

<a class="btn" href="https://download.hacash.org/miner_node_hacash_windows64.zip" target="_blank">⇩ Windows 64位</a>　
<a class="btn orange" href="https://download.hacash.org/miner_node_hacash_ubuntu64.zip" target="_blank">⇩ Ubuntu 64位</a>　
<a class="btn gray" href="https://download.hacash.org/miner_node_hacash_macos64.zip" target="_blank">⇩ MacOS 64位</a>

或者去 Hacash 软件发布中心下载：

- [Hacash软件发布日志与下载中心](https://github.com/hacash/miner/blob/master/doc/software_release_log.md)

下载的全节点软件压缩文件中包含一个可执行文件和一个 `.ini` 格式配置文件，类似：

<pre class="log">
1 │ hacash_miner_node_2023_11_02_01 │ 10.6MB
2 │ hacash.config.ini               │  1.1KB
</pre>

<p class="note">注意：`hacash.config.ini` 配置文件中包含boot节点IP地址等全节点运行必须信息，请勿删除或任意修改。如需修改请用文本编辑器打开编辑。</p>

## 运行

下载对应操作系统版本的全节点软件后，无需修改任何配置，以命令行方式运行里面的可执行文件（注意授予运行权限）：

<pre class="cmd">
<b>./hacash_miner_node_2023_11_02_01 ./hacash.config.ini</b>
[Version] Hacash node software: 0.1.17(20231026.1), p2p compatible: block version[1], transaction type [2], action kind [12], repair num [1]
[Conf] Load ini config file: "./go/src/github.com/hacash/test/test2.ini" at time:11/02 16:42:36
[BlockChain] Block chain state data dir: "./go/src/github.com/hacash/test/test_data_3/v12"
[P2P] Start node hn_dev1 id:1f6c59266fc02792e811d90061f925a3 listen port 33371.
[Peer] hn_dev0 (127.0.0.1:3337) id:34b1178c53b25123d64c021957bb74e3 connect.
sync blocks from peer hn_dev0(127.0.0.1:3337): 1... got blocks(0.20%): 1 ~ 1000, inserting... OK
sync blocks from peer hn_dev0(127.0.0.1:3337): 1001... got blocks(0.41%): 1001 ~ 2000, inserting... OK
sync blocks from peer hn_dev0(127.0.0.1:3337): 2001... got blocks(0.61%): 2001 ~ 3000, inserting... OK
sync blocks from peer hn_dev0(127.0.0.1:3337): 3001... got blocks(0.81%): 3001 ~ 4000, inserting... OK
sync blocks from peer hn_dev0(127.0.0.1:3337): 4001... got blocks(1.02%): 4001 ~ 5000, inserting... OK
... ...
all block sync successfully.
</pre>

运行后请等待区块数据同步完成，视网络情况而定，需要十几分钟或一两个小时不等。同步完成后继续保持运行全节点，将打印新的交易、区块发现或者新节点加入等信息，类似：

<pre class="print">memtxpool add tx: ebfffa99509c4a07570a82c6a3c878310b3722ca7efa1dea9d739d1e864955be
memtxpool add diamond create tx: 8ff2157241fa18caaddbcfdb952246d479a309b801e7b6dc457ff9c82caad804 , diamond: 80027 HSBBZY
[11/02 20:25:38] discover new block height: 492338, txs: 0, hash: 0000000008c9d6625299ebb0e853b523e845ee4e12f3d542c2a5e8ac92bae588, time: 20:17:44, try to inserting ... ok.
[11/02 20:27:14] discover new block height: 492339, txs: 3, hash: 000000000226ebf2edc82a9d7537c4ddc759601e7317492283fd01fbe5426af5, time: 20:25:38, try to inserting ... ok.
[Peer] Heisenberg (135.181.97.41:3337) connect.
</pre>

<p class="note">注意一：需要等待区块数据全部同步完成之后（ 显示 `all block sync successfully.` 表示同步完成），才能修改配置后进行重启，以搭建矿池或挖掘 HACD 等操作，否则将导致相关操作无效。程序会自动搜索同目录下的 `hacash.config.ini` 文件作为配置文件。</p>

<p class="note">注意二：在Windows系统下双击运行 `.exe` 文件，可能由于窗口闪退而无法显示错误日志，请使用 `PowerShell` 方式运行。</p>

## 编译

除了直接 [下载Hacash全节点软件](https://github.com/hacash/miner/blob/master/doc/software_release_log.md)，也可以通过源码编译，以获得对应操作系统版本软件，或进行验证：

- [Hacash全节点源码入口](https://github.com/hacash/miner)
- [Hacash编译部署文档](https://github.com/hacash/miner/blob/master/doc/build_compilation_en.md)





Run Hacash Full Node
Run a full node in just two steps in the fastest way possible




## Download

Select the corresponding operating system to download the Hacash full-node software:

<a class="btn" href="https://download.hacash.org/miner_node_hacash_windows64.zip" target="_blank">⇩ Windows 64bit</a>　
<a class="btn orange" href="https://download.hacash.org/miner_node_hacash_ubuntu64.zip" target="_blank">⇩ Ubuntu 64bit</a>　
<a class="btn gray" href="https://download.hacash.org/miner_node_hacash_macos64.zip" target="_blank">⇩ MacOS 64bit</a>

Or go to the Hacash Software Distribution Center to download:

- [Hacash Release Center](https://github.com/hacash/paper/blob/master/build/software_release_log.md)

The downloaded full-node software zip file contains an executable file and a `.ini` format configuration file, similar to:

<pre class="log">
1 │ hacash_miner_node_2023_11_02_01.exe │ 10.6MB
2 │ hacash.config.ini                   │  1.1KB
</pre>

<p class="note">Note: The `hacash.config.ini` configuration file contains essential information for the operation of the node, such as the IP address of the network boot node. Do not delete or modify it. If you need to change it, open it in a text editor.</p>

## Run

After downloading the full-node software of the corresponding operating system version, run the executable file in the command line mode without modifying any configuration (note that the operation permission is granted) :

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

After running, please wait for the block data synchronization to complete, depending on the network situation, it takes more than ten minutes or one or two hours. After the synchronization is complete, continue to run the full node, and will print new transactions, block discovery or new node joining information, similar to:

<pre class="print">memtxpool add tx: ebfffa99509c4a07570a82c6a3c878310b3722ca7efa1dea9d739d1e864955be
memtxpool add diamond create tx: 8ff2157241fa18caaddbcfdb952246d479a309b801e7b6dc457ff9c82caad804 , diamond: 80027 HSBBZY
[11/02 20:25:38] discover new block height: 492338, txs: 0, hash: 0000000008c9d6625299ebb0e853b523e845ee4e12f3d542c2a5e8ac92bae588, time: 20:17:44, try to inserting ... ok.
[11/02 20:27:14] discover new block height: 492339, txs: 3, hash: 000000000226ebf2edc82a9d7537c4ddc759601e7317492283fd01fbe5426af5, time: 20:25:38, try to inserting ... ok.
[Peer] Heisenberg (135.181.97.41:3337) connect.
</pre>

<p class="note">Note 1: After all block data is synchronized ("all block sync successfully.  " indicates that synchronization is complete), modify the configuration and restart to set up mining pools or mining HACD operations.  Otherwise, related operations will be invalid.  The program will automatically search for the 'hacash.config.ini' file in the same directory as the configuration file.</p>

<p class="note">Note 2: Double-click to run the '.exe' file in Windows system, may not display error log due to the window blink, please use' PowerShell' mode to run.</p>

---

## Compile full node

In addition to[downloading Hacash full node software](https://github.com/hacash/miner/blob/master/doc/software_release_log.md) directly，it can also be compiled through the source code to obtain the corresponding operating system version software, or to verify:

- [Hacash Fullnode Source Code](https://github.com/hacash/miner/blob/master/run/main/main.go)
- [Hacash Build Doc](https://github.com/hacash/paper/blob/master/build/build_compilation.md)





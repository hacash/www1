HAC Mining
Join the mining pool, use GPU, Solo and other ways to participate in mining






Before you start mining for the first time, you need [Create Account](https://wallet.hacash.org?lang=[:=lang.useset:]), used to collect HAC mining rewards.


<a name="pool"></a>

## Join Pool to Mining

Hacash community has several mining pools to choose from, just visit the mining pool website, download the corresponding mining tools, you can easily start mining:

<pre class="links">
WoW_Pool
https://hacpool.com
wowpool
Automatic settlement

.Diamonds Pool
https://www.hacash.diamonds/pool
hxdm
Support CPU & GPU
</pre>

Different mining pools have different settlement rules and rate standards, please see the page of each mining pool service for details. Take the `.org` test mining pool as an example, give the tutorial of joining the mining pool mining, first download the mining pool mining software:

<a class="btn" href="https://download.hacash.org/miner_pool_worker_hacash_windows64.zip" target="_blank">⇩ Windows 64bit</a>　
<a class="btn orange" href="https://download.hacash.org/miner_pool_worker_hacash_ubuntu64.zip" target="_blank">⇩ Ubuntu 64bit</a>　
<a class="btn gray" href="https://download.hacash.org/miner_pool_worker_hacash_macos64.zip" target="_blank">⇩ MacOS 64bit</a>

The downloaded mining software archive contains an executable file and a `.ini` format configuration file, similar to:


<pre class="log">
1 │ miner_pool_worker_2023_11_02_01.exe │ 3.6MB
2 │ poolworker.config.ini               │ 347B
</pre>

The `poolworker.config.ini` file in the compressed package is the necessary configuration file for the miner program, opened with the editor, you can see the internal content is:


<pre class="log cnf">
<i>pool</i> = <s>182.92.163.225:3339</s>
<i>rewards</i> = <s>1AVRuFXNFi3rdMrPH4hdqSgFrEBnWisWaS</s>
<i>supervene</i> = <s>8</s>
</pre>

The `pool` parameter is the address of the mine pool and represents the IP and port of the server to be connected. The default IP address 182.92.163.225:3339 in the profile is a long running and valid mining pool address that can be used directly and is operated by Hacash.org. If you use another third party pool, contact your pool provider for a valid IP connection address.

<p class="note">Note: Some of the mining software of the mining pool provider has an IP address built in through encryption, so there is no need to fill in the config file.</p>


The string value of the `rewards` parameter is the account address of Hacash, which is used to receive rewards from mining. This address must be generated through the purse, have a specific format, you can use the [online wallet](https://wallet.hacash.org?lang=[:=lang.useset:]), through strict confidentiality and make backup password, or create a private key to generate the account address. 

The parameter `supervene` indicates how many threads mining is enabled at the same time, which is generally consistent with the number of CPU cores on your computer to maximize computing power. For example, the number of CPU cores in your computer is 2 cores, then 'supervene = 8' is changed to `supervene = 2`, if it is 4 cores, it is changed to `supervene = 4`, and so on. The CPU utilization of the computer is 100%. It is generally recommended to set aside a core for other calculations: 4 cores set to 3 and 8 cores set to 7. Can also be set according to your situation, the smaller the value, the lower the CPU utilization. This value does not support decimals, is as small as 1, and is not recommended to be set to a value larger than the number of CPU cores on your computer.

After the modification is complete and saved, run by command line or double-click it. You will see the following information:

<pre class="print">[Start] connect: 182.92.163.225:3339, rewards: 1AVRuFXNFi3rdMrPH4hdqSgFrEBnWisWaS, supervene: 8. 
connecting miner pool... ok.
do mining height:‹497921›, cbmn:1... 
</pre>

At this time, the program has automatically started mining, you can open the task manager to view the utilization of the CPU, and see the statistics of the mining power to join the mining pool: [http://182.92.163.225:3340](http://182.92.163.225:3340). If using a third party mining pool, please contact your mining pool provider to view real-time statistics and the amount of mining rewards you are entitled to.



<a name="fullnode"></a>

## Mining on Full Node

Before mining on full node，need to [Run Full Node](/run-full-node), and wait for all block data synchronization to complete.

The full-node software has a built-in mining function, requiring only a few configuration changes to automatically start mining. The `hacash.config.ini` file is the mandatory configuration file for the Hacash full-node program and contains various configurations. You only need to modify the three parameters under the `[miner]` item in the configuration file:

<pre class="log cnf">
<b>[miner]</b>
<i>enable</i> = <s>true</s>
<i>supervene</i> = <s>1</s>
<i>rewards</i> = <s>1AVRuFXNFi3rdMrPH4hdqSgFrEBnWisWaS</s>
<i>message</i> = <s>unknown</s>
</pre>

Drop the semicolon `;` in front of `enable = true` to open mining mode（Semicolon `;`indicates to close this item so that it does not take effect, and other item configurations such as HACD mining do the same). The parameter `supervene` indicates how many threads mining is enabled at the same time, which is generally consistent with the number of CPU cores on your computer to maximize computing power. For example, the number of CPU cores in your computer is 2 cores, then 'supervene = 8' is changed to `supervene = 2`, if it is 4 cores, it is changed to `supervene = 4`, and so on. The CPU utilization of the computer is 100%. It is generally recommended to set aside a core for other calculations: 4 cores set to 3 and 8 cores set to 7. Can also be set according to your situation, the smaller the value, the lower the CPU utilization. This value does not support decimals, is as small as 1, and is not recommended to be set to a value larger than the number of CPU cores on your computer.

The string value of the `rewards` parameter is the account address of Hacash, which is used to receive rewards from mining. This address must be generated through the purse, have a specific format, you can use the [online wallet](https://wallet.hacash.org?lang=[:=lang.useset:]), through strict confidentiality and make backup password, or create a private key to generate the account address. `message` is the identifier of the block announcer, and generally only mining pool need to be set.

<p class="note">Note: You need to wait for block synchronization to complete before modifying the configuration, and then restart the full node for the mining configuration to take effect</p>

## Build Personal Mining Pool

If there are multiple machines on the Intranet mining at the same time, you can build a private mining pool on the LAN, the same method as building a public mining pool, see:

<pre class="links">
Run Mining Pool
/mining-pool
</pre>

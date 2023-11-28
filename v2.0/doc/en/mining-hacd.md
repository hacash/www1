HACD Mining
Mining and bidding HACD



HACD (Block Diamond) is another heterogeneous, indivisible currency on the Hacash network, detail introduction can be found on [HACD.art](https://HACD.art). Mining HACD requires some conditions

## Get HAC

Note：Mining [HACD](/HACD) need use Hacash's another  coin [HAC](/HAC) to bidding, Participation in the on-chain auction can only be confirmed. HAC can be obtained by mining and purchasing:

<pre class="links">
HAC Mining
/mining-HAC

Buy HAC
/get#HAC
</pre>

## Run Full Node

HACD supports only full-node mining. Before you can start HACD mining, you need to run the full node and synchronize all the block data.

<pre class="links">
Run Full Node
/run-full-node
</pre>


## Start Mining

HACD mining is built into the full-node software, and only a few configuration modifications are required to automatically start mining. Same as [HAC fullnode mining](/mining-HAC#fullnode) process.

The `hacash.config.ini` file is the mandatory configuration file for the Hacash full-node program and contains various configurations. You only need to modify a few parameters under the `[HACDminer]` item in the configuration file:

<pre class="log cnf">
<b>[HACDminer]</b>
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

Where `supervene` is the number of concurrent threads of multi-threaded parallel mining, which has the same meaning as the `supervene` parameter of HAC coin mining; The `fee_amount` parameter is the default amount of commission bids for HACD mined. If multiple HACD are mined in a block at the same time, the HACD with the highest commission bid will be packaged into the block and validated by the entire network. Other HACD of the same period will be considered invalid and discarded, and the next HACD will be mined from scratch again.

If the HACD you mining is not confirmed, the bid will not be valid and you will not lose any coin.

`fee_password` is the password or private key of the account address that pays the fee bid (the balance set by `fee_amount` must be ensured in the account before the mined HACD can be minted).

The `rewards` parameter is set to the reward address after miningging the HACD, that is, the home address of the newly dug HACD. `continued` indicates whether to continue to mining HACD after mining a HACD, which will lead to the possibility of miningging multiple HACD in a cycle, from which you can choose HACD that you think are more valuable to exclude higher offers.

Check [Blockchain Explorer](https://explorer.hacash.org?lang=[:=lang.useset:]) can view the commission bidding ranking of all HACD mined in the current cycle in real time.

<p class="note">Note: Only the first HACD of bidding list in a cycle (5 blocks) will be packaged and the other HACD will be discarded. If you need to rise to the top of the ranking, you can reset the handling fee of the corresponding HACD in the <a href="https://wallet.hacash.org?lang=[:=lang.useset:]">Online Wallet</a>. (The result of HACD mining is that a special transaction is packaged into a block height that is divisible by 5, and the fee for ranking the HACD after mining is the fee for a transaction)</p>

After starting the procedure for mining HACD, the display should be as follows:

<pre class="print">[Version] Hacash node software: 0.1.17(20231026.1), p2p compatible: block version[1], transaction type [2], action kind [12], repair num [1]
...
do HACD mining... number: 81128, supervene: 6, start worker: #1 #2 #4 #5 #6 #3
...
</pre>

By setting the parameter of `autobid = true`, the program of miningging out HACD can be bid automatically. Among them, `fee_ amount = ㄜ1:247` means the first bid for miningging out HACD. Then, every 10 seconds, the program automatically checks the HACD bid of the current highest bid. If the bid is higher than my bid, the parameter autobid will be used `autobid_fee_margin = ㄜ 2:247` is the step value of bid, and the price higher than the highest HACD bid will be automatically issued, so as to keep the highest bid of HACD excavated by oneself. Parameter `autobid_fee_max = ㄜ 10:248` is the upper limit that I will issue for each HACD, which means that if other people bid more than this price, I will stop bidding and will not quote a higher price.

`autobid_check_interval` is the number of seconds between each check bid time, the minimum can be set to 1 second.

<p class="note">[Special note] Automatic bidding does not guarantee that you will get the HACD, such as the following situations:<br/>
　　1. HACD are mined too late at the end of the cycle to make the first bid, and other HACD with the highest current bid are already packed into the block;<br/>
　　2. In the ten-second interval between automatic quotes, someone else's HACD are packed;<br/> 
　　3. Network synchronization delays cause your program to not get other people's quotes;<br/>
If you want to maximize your chances of getting HACD, try to optimize the following:<br/>
　　1. Upgrade to a more stable network (better links but no bandwidth required);<br/>
　　2. Try to issue a higher first bid and bid step value, so that after a few bids to exceed the maximum value set by others, so as to beat others;<br/>
　　3. Please do not set the bid step value too small (`autobid_fee_margin` parameter), too small fee changes will be less accurate than the system can recognize, and will not change your bid order;<br/>
</p>
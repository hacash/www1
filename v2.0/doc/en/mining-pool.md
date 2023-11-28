Run HAC Mining Pool
Start HAC public mining pool service or create a private mining pool




If you just want to mining, check [Join the pool to mining HAC](/mining-HAC#pool) 。

## Run Full Node

Before building your own mining pool, you need to run a full node and synchronize all block data.

<pre class="links">
Run Full Node
/run-full-node
</pre>

## Start Building

The full node software has built-in basic mining pool mining function to meet the needs of multiple machines mining at the same time or joint mining. Open the full node configuration file `hacash.config.ini` to change `[miner]` item，open mining mode `enable = true` (delete the semicolon `;` before the enable field to open)

<pre class="log cnf">
<b>[miner]</b>
<i>enable</i> = <s>true</s>
<i>rewards</i> = <s>1MzNY1oA3kfgYi75zquj3SRUPYztzXHzK9</s>
<i>message</i> = <s>unknown</s>
</pre>

In the above configuration, `rewards`` is the address where the mining pool receives block rewards; `message`` is a flag for the block find announcer, which can be customized to identify who mined the block, with no more than 16 characters.

Then open the `enable` field under `[minerpool]` and modify the other fields as needed:

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

In the above configuration, the parameter `console_http_port` indicates the port of the background computing power and address list to view the web page; `listen_port` is the mining pool connection service port. `max_connect` is the maximum number of connections, depending on the server configuration; `fee_percentage` is the mining pool service rate, 0.05 means 5% service charge, 0.01 means 1%; `rewards_password` represents the account password or private key for the mine pool automatic coin, and the account address must be the same as the address set in the `rewards` parameter under `[miner]`.

After the modification is complete, save the modification, restart the whole node, and set up a mining pool. The mining pool can be linked using a public IP  and Port. Please check the connection method:

<pre class="links">
Join Mining Pool
/mining-HAC#pool
</pre>




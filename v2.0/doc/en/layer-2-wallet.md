Channel Wallet
Hacash Channel Chain Layer 2 Wallet User Manual



The channel chain payment settlement network is Hacash's Layer 2 expansion network (see the whitepaper for details: 
 [Hacash Whitepaper]([:=lang.links.wp:]) ),Payments through the channel chain can be made in real time without any wait, without transaction processing capacity bottlenecks and with extremely low fees. In short, the expansion mode has no waiting time for confirmation and no TPS upper limit. In addition to hardware performance such as computing power and bandwidth size, there are no protocol level confirmation time limits and transaction capacity constraints. In layman's terms, channel chain payments make payment and receipt as simple, fast, efficient and secure as sending an email with the support of a layer of blockchain security. The channel chain network supports payments in both HAC and Hacash-BTC currencies.

Please select and contact your `Channel Service Provider` who will assist you in opening your channel account and send you the channel wallet login address.

<p class="note">Note: Do not reveal your private key under any circumstances</p>

## Download Wallet

The Layer 2 payment network has a separate wallet that needs to be logged in via the address private key and kept online. Just logging in locally on the client side, however, does not propagate security information such as your private key across the network. Click the button below to download the wallet client for your system:

<a class="btn" href="https://download.hacash.org/hacash_channelpay_client_windows64.zip" target="_blank">⇩ Windows-64bit</a>　
<a class="btn orange" href="https://download.hacash.org/hacash_channelpay_client_ubuntu64.zip" target="_blank">⇩ Ubuntu-64bit</a>　
<a class="btn gray" href="https://download.hacash.org/hacash_channelpay_client_macos64.zip" target="_blank">⇩ MacOS-64bit</a></p>

Download the Layer 2 wallet and open the software. Please be careful not to open the software directly by double-clicking in the zip archive. You need to unzip it to your desktop or another folder, and then open the software. Because the software needs to create a directory in the folder to save channel ticket data, opening the software in the zip compression package can not create a folder, resulting in an error.

## Login

After the software opens, you can see the following login screen:

<img class="lazy ctw" data-src="/image/channelpay/login.png" />

The login screen has three input fields, of which the first two are required, and the third `reconciliation or payment of bills`is optional. The first entry, `Hacash Channel Address`, is the full channel account address as described above, for example:

<pre class="log">
1PytoNB53MX2bi1Nw2S6Fyharzv4zGTDDD_4d295889c6e0e1fc64237e01cd480fd6_PaySer
</pre>

the second place is the private key accounts, which is `1PytoNB53MX2bi1Nw2S6Fyharzv4zGTDDD` private key.

<p class="note">Note: the private key should not be disclosed to anyone, including your payment provider<p>

Note: The `Payment bill` entry is the channel reconciliation ticket to import, and the `Route Server URL` entry is the routing server URL to use.  These two items do not need to be entered in normal cases.  You only need to enter them when importing tickets or using them as test routes.
When you login to the channel Wallet on a new device, your latest reconciliation notes are not stored locally on the new device. If you have already made or received payments, you will need to provide the most recent Reconciliation or Payment note when you log in. If you are logging in for the first time or have not paid or received before, you do not need to provide.

When you use the new device, you can click on the `Export bill` TAB in the login screen, enter your channel ID, and export the old ticket for use on the new device. As follows:

<img class="ctw lazy" data-src="/image/channelpay/expbill.png" />

Please note that your device must be connected to the Internet. Without error, the channel chain wallet interface can be seen after login:

<img class="ctw lazy" data-src="/image/channelpay/wallet.png" />

In the wallet display, `Channel Balance` is your available balance, `5:248` means that the balance has 5 HAC, `50,000 sats` means that there are 50,000 Sats of Bitcoin, which can be paid with HAC or BTC on demand; `Collection Capacity` is the collection capacity, indicating the maximum amount of funds that you can collect on this channel; `[Reconciliation meta info]` is your real-time reconciliation bill information, be sure to back it up in time. If the reconciliation bill is lost, the channel counterpart will be likely to choose the statement in their favor to steal your funds.

Enable the `Collection` button to automatically receive payments, turn off any payments will be directly rejected. Just log in and stay connected to receive money automatically, no action required.

## Initiate Payment

To initiate the transfer, fill in the channel wallet address of the recipient and the Payment amount in the two input fields under `Payment`.


Please note that channel chain wallets can support HAC or BTC payments. If the Payment entry box is filled with an amount marked with Bitcoin unit SAT (sats) such as `500SAT`, `500sat` or `500Sats`, it means that the payment is made in Bitcoin, otherwise it is made by HAC.

After filling in the Transfer information and checking that it is correct, click the `Start Transfer` button, the client will request the service provider to query the route and initiate payment. If there is no route resolution error, or no service provider identifier and other errors, you will see the following payment confirmation dialog box for route selection and transaction cost check:

<img class="ctw lazy" data-src="/image/channelpay/dopay.png" />

Click to select the payment path (there is usually only one path) and click the Confirm payment button to initiate the payment immediately.

<p class="note">Please note that the payment is immediate and irrevocable. Please check the correct payment address and amount carefully.</p>

If the recipient channel does not exist, is unavailable, or is not online, an error message will be displayed in the log print area:

<img class="ctw lazy" data-src="/image/channelpay/errlog.png" />

If the recipient remains online at this time, and the payment amount does not exceed the limit, and the network signature is free of errors, the payment will be immediately successful, and the corresponding prompt message will be printed:

<img class="ctw lazy" data-src="/image/channelpay/successlog.png" />

The above green message indicates that the payment has been successful. After the payment is completed, the balance, channel capacity and reconciliation bill displayed in the wallet interface will change in real time. Please pay attention to the change of balance and back up the reconciliation bill in time:

<img class="ctw lazy" data-src="/image/channelpay/bill.png" />

In the information displayed on the screen above, `[Reuse version]` indicates the channel reuse version number, which will automatically increase after you modify the channel capacity in the future, and `[Bill serial number]` is the self-increasing serial number for paying a reconciliation ticket each time a payment is initiated or a collection is completed. The ticket number is automatically +1. The string in the input box is the latest reconciliation bill data.

<p class="note">Note: Be sure to back up the channel reconciliation note in a timely manner, which is proof of your available balance. If you lose channel tickets, or don't back up the latest channel tickets in time, you can't prove that your available balance is valid, and the perpetrator may provide proof of an expired ticket allocation in his favor, thereby taking your money on the mainnet.</p>

In general, as long as your device does not experience data loss failures, or manually delete the data directory, the client will create a folder in the directory where the software is located to save and update the latest channel reconciliation notes after each payment and receipt, but will not save the expired notes. If you log in to multiple channels, the tickets for each channel are stored separately and do not affect each other.

## Others

If you want to become a channel chain payment network service provider, please see:

<pre class="links big">
Company: Setup Payment Service Node
/layer-2-node
</pre>









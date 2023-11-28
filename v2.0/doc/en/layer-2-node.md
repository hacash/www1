Channel Service Provider
Hacash Channel Chain Payment Network Service Provider



The channel chain payment settlement network is Hacash's Layer 2 expansion network, see the whitepaper for details: 
 [Hacash Whitepaper](/whitepaper.pdf)

## What is Channel Service Provider

The channel chain payment settlement network is a peer-to-peer payment network, and no node has asymmetric capital control rights with other nodes.  Regardless of whether there is a gap in funding scale or technology development, the financial security of its network parties depends entirely on their own honesty and careful checking of mainnet data updates, and does not depend on other things such as identity, status, wealth, technical ability or social prestige.  Hacash Mainnet acts as an absolutely objective arbiter that only looks at the evidence (that is, reconciling bills), equally ensuring that the funds of all types of users are not plundered and stolen.

Due to the different division of labor and resource advantages, in the actual operation of a healthy business cooperation economy, a certain part of the professional node in the network can provide its own technical advantages to provide more efficient and convenient various technical services for everyone's payment needs. For example, in the channel route routing, channel fund flow optimization, network online quality, reconciliation bill backup and arbitration real-time monitoring and other transactions, professional nodes can provide services in the form of charging a small transaction fee. It is worth noting that this service is only a technical commodity that can be withdrawn at will, and it is fundamentally different from traditional banking where funds are entrusted, and the service provider does not control your money. Simply put, your money is not stored in someone else's hands but is always controlled by the private key, and no one can transfer your money without permission. In addition, the service is paid per view, and the service qualification of the other node can be revoked immediately at any time, and the better service node can be freely selected at almost zero cost.

The nodes of the payment service providers in the channel network are like the broadband access service providers of the Internet or the E-mail service providers, which provide the flow of information and the former provide the flow of money. As with Email, each payment service provider has a unique identifier due to the need for service identification differentiation and payment routing. For example, the @gmail.com suffix in the email address, taking the hypothetical payment service provider `PaySer` as an example, the channel chain account address example:


<pre class="log">
1PytoNB53MX2bi1Nw2S6Fyharzv4zGTDDD_4d295889c6e0e1fc64237e01cd480fd6_PaySer
</pre>

The above address is divided into three sections, that is, the general account address part `1PytoNB53MX2bi1Nw2S6Fyharzv4zGTDDD` , Channel ID part `4d295889c6e0e1fc64237e01cd480fd6` and the payment service provider identifier section `PaySer`, three parts are underlined together to form a complete channel link account address. When logging in to the channel chain wallet, you need to provide this full form of account address, which is the login/payment address.

When the client receives payment, if the account address only opens a single channel with the service provider, or multiple channel services are opened at the same address, and the service provider needs to automatically select the appropriate payment channel, the channel ID part in the middle of the address can be removed, that is, simply written as:
<pre class="log">
1PytoNB53MX2bi1Nw2S6Fyharzv4zGTDDD_PaySer
</pre>

HIP-6 proposal ( [Hacash Diamond Name Service](https://hacashtalk.com/t/hip-6-hacash-diamond-name-service/138) ) That is, after HDNS uses the HACD name for the account address DNS resolution service, the collection address can be further simplified to, for example:

<pre class="log">
MYBANK_PaySer
</pre>

At this point, the receiving address will automatically resolve the address of the owner of this HACD, and the target service provider will automatically select the appropriate channel.

## Setup Service Provider Node

Since it is still early days for the Hacash infrastructure, there is no particularly well-developed infrastructure for "one-click deployment" of service nodes for a channel chain network. The Github repository has a working open source code, and a working service node can already be set up. Although the whole payment process has been described more completely above, there is still a lack of clear construction documents.
The ecological construction has just begun, and more teams are needed to build it together. For service nodes, there are two key processes:

- Channel Routing System

The current solution is to use a "channel alliance" technology, where all merchant service nodes unite to form a decentralized, non-profit routing data delivery and update alliance organization to serve as the routing data management method of the "backbone channel" between merchants.

- Customer Acquisition System

Open payment channels for target customers by using online process automation or offline manual services

---

The above two points, the customer acquisition system depends on the independent development and creation of each merchant, and the routing alliance needs to be built by all merchants or teams who plan to become merchants, please join the Discord:

<pre class="links big">
Hacash Channel Payment Union (HCPU)
https://discord.gg/nj5RD6z6JN
</pre>




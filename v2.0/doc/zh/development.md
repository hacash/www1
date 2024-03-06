开发者导引
Hacash 开发相关说明和各工具、接口文档链接



本页面为 Hacash 相关的各类开发者提供初步的指引说明和文档链接，并对一些与开发工作相关的重要注意事项进行解释。另外，所有代码和文档都会被提交至 [Github](https://github.com/hacash/miner) 上并完全开源，如果文档里没有你需要的信息，你可以在开源代码库里找到所有内容。

<a name="rpc"></a>
## 交易所或钱包接入

交易所或者钱包接入 HAC、 HACD 或 Hacash 链上的 BTC 资产，并且扫描交易或区块数据、创建新的转账交易，请阅读 RPC API 接口文档。

<pre class="links">
广播交易必读
https://github.com/hacash/doc-chinese/blob/main/service/memtxpool_operation_important_note.md

RPC API 接口文档
https://github.com/hacash/doc-chinese/blob/main/service/rpc_api_doc.md

全节点软件下载
https://github.com/hacash/node/releases

运行全节点
/run-full-node
</pre>

<a name="mining"></a>
## 挖矿及矿池

要运行 Hacash 社区提供的开源矿池，请查看 [搭建矿池](/mining-pool)。如果你需要开发矿池或者自定义的挖矿工具，或者了解挖矿产出的细节，请查看下面三个文档：

<pre class="links">
挖矿或矿池服务文档
https://github.com/hacash/doc-chinese/blob/main/service/miner_service_api.md

X16RS 挖矿算法说明
https://github.com/hacash/doc-chinese/blob/main/tech/x16rs_algorithm_description.md

HAC & HACD 挖矿公平性说明
https://github.com/hacash/doc-chinese/blob/main/tech/HAC_HACD_mining_fairness_description.md

Hacash 挖矿技术开发说明
https://github.com/hacash/doc-chinese/blob/main/tech/mining_tech_development_description.md
</pre>

<a name="tool"></a>
## 应用及工具开发

如果你想要开发一些服务于 Hacash 的工具，通过研究 Hacash 的开源钱包和区块浏览器等已有工具将是很好的开始方式，这些既有工具开发和使用了一些接口可能并没有写入文档。以下是已有工具的代码链接，API代码链接和接口文档：


<pre class="links">
RPC API 接口文档
https://github.com/hacash/doc-chinese/blob/main/service/rpc_api_doc.md

临时 API
https://github.com/hacash/service/blob/master/deprecated/routes.go

钱包代码库
https://github.com/hacash/wallet

浏览器代码库
https://github.com/hacash/explorer
</pre>

<a name="core"></a>
## 区块链核心层

要参与区块链核心层的开发，需要满足一定的条件，这些条件在 [HIP-12](https://github.com/hacash/doc-chinese/blob/main/HIP/development/HIP-12_Hacash_development_workflow_and_code_permission.pdf) 中有详细说明。每一项对 Hacash 主网核心层的新增和变动，都需要提起一份 HIP 文档作为评估依据。需要编译和部署 Hacash 全节点，这里也有一份简单的指引。

<pre class="links">
HIP-12
https://github.com/hacash/doc-chinese/blob/main/HIP/development/HIP-12_Hacash_development_workflow_and_code_permission.pdf

HIP 提案库
https://github.com/hacash/paper/blob/master/HIP/HIP-table.md

编译和构建文档
https://github.com/hacash/doc-chinese/blob/main/build/build_compilation_en.md
</pre>


## 开发者社区

开发工作的前期沟通和讨论一般在 Discord 上进行，并随后在 [Github](https://github.com/hacash) 上形成比较正式的规范文档。点击下方链接可加入开发讨论，提起新的开发工作或者询问某些开发问题。

<pre class="links">
Discord 开发组
https://discord.gg/wKAJHxUgb6

Github 文档中心
https://github.com/hacash/doc-chinese
</pre>

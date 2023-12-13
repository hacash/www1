HAC 单位
1:248 货币格式说明与转换方法




在下方的输入框内填写HAC的数量并点击“转换”按钮，得到通常的形式：

<div class="fmtshow"></div>

<div>
    <div class="fmtbox" id="cvfmt">
        <input class="in" placeholder="例如：1456:245 或 ㄜ11,909,493:244" /> <button class="btn">转换单位</button>
        <p class="res"></p>
    </div>
</div>



HAC是一种支持无限分割的货币资产，为实现这一点而发明了一套独特的记账格式规范（例如 1:248 ），类似科学计数法（例如1 x 10^248）。本文档将解释此单位格式的技术原理和换算方法。

首先，BTC在比特币链上的可分割性为一亿分之一，也即是1/100000000。而HAC的可分割性为 一亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿亿分之一，也就是说一枚HAC最多可以分成100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000份（1的后面跟248个零，为10^248），这个数量比宇宙中的原子还要大很多个数量级（已知、可观测的宇宙中，有10^78到10^82个原子）。

如果在每一处都直接显示如此多数量的0，这将造成严重的可读性和输入性问题。HAC采用一种简写的方式来避免0的重复显示，即采用一种科学计数法的简写形式，将 1 x 10^248 简写为 1:248。下面是一些换算示例：

<div>
    <div class="tbmb f">
        <table>
            <tr><th>枚数</th><th>简记</th><th>科学计数法</th></tr>
            <tr><td>1 HAC</td><td>1:248</td><td class="cr">1 x 10^248</td></tr>
            <tr><td>10 HAC</td><td>1:249</td><td class="cr">1 x 10^249</td></tr>
            <tr><td>100 HAC</td><td>1:250</td><td class="cr">1 x 10^250</td></tr>
            <tr><td>1000 HAC</td><td>1:251</td><td class="cr">1 x 10^251</td></tr>
            <tr><td>10000 HAC</td><td>1:252</td><td class="cr">1 x 10^252</td></tr>
        </table>
    </div>
    <div class="tbmb">
        <table>
            <tr><th>枚数</th><th>简记</th><th>科学计数法</th></tr>
            <tr><td>0.1 HAC</td><td>1:247</td><td class="cr">1 x 10^247</td></tr>
            <tr><td>0.01 HAC</td><td>1:246</td><td class="cr">1 x 10^246</td></tr>
            <tr><td>0.001 HAC</td><td>1:245</td><td class="cr">1 x 10^245</td></tr>
            <tr><td>0.0001 HAC</td><td>1:244</td><td class="cr">1 x 10^244</td></tr>
            <tr><td>0.00001 HAC</td><td>1:243</td><td class="cr">1 x 10^243</td></tr>
        </table>
    </div>
    <div class="tbmb">
        <table>
            <tr><th>枚数</th><th>简记</th><th>科学计数法</th></tr>
            <tr><td>12 HAC</td><td>12:248</td><td class="cr">12 x 10^248</td></tr>
            <tr><td>6789 HAC</td><td>6789:248</td><td class="cr">6789 x 10^248</td></tr>
            <tr><td>1.456 HAC</td><td>1456:245</td><td class="cr">1456 x 10^245</td></tr>
            <tr><td>0.172 HAC</td><td>172:245</td><td class="cr">172 x 10^245</td></tr>
            <tr><td>35.94 HAC</td><td>3594:246</td><td class="cr">3594 x 10^246</td></tr>
        </table>
    </div>
</div>

如此设计和显示的单位格式，让HAC既能够实现无限分割，又能避免恼人的可读性、输入性问题，代价就是需要一定的学习理解和适应过程，才能快速读出货币的实际数量。


<script src="/jslib/doc/hac-unit.js"></script>


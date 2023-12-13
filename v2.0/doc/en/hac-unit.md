HAC Unit
Format Description and Conversion


Fill in the quantity of HAC in the input box below and click the "Convert" button to obtain the usual format:

<div class="fmtshow"></div>

<div>
    <div class="fmtbox" id="cvfmt">
        <input class="in" placeholder="Such as: 1456:245 or ㄜ11,909,493:244" /> <button class="btn">Convert</button>
        <p class="res"></p>
    </div>
</div>





HAC is a monetary asset that supports unlimited division. To achieve this, we have invented a set of unique accounting format specifications (such as 1:248), similar to the Scientific notation (such as 1 x 10 ^ 248). This document will explain the technical principles and conversion methods of this unit format.

The divisibility of BTC on the Bitcoin chain is 1/100 million, which is 1/100 million. And the separability of HAC is 1 / 10^248, That is to say, a HAC can be divided into a maximum of 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 part (1 followed by 248 zeros, 10 ^ 248), This quantity is many orders of magnitude larger than the atoms in the universe (there are 10 ^ 78 to 10 ^ 82 atoms in the known and observable universe).

If such a large number of zeros are displayed directly in each location, it will cause serious readability and input issues. HAC adopts a simplified way to avoid the repeated display of 0, that is, it adopts a simplified form of Scientific notation, which shortens 1 x 10 ^ 248 to 1:248. Here are some conversion examples:

<div>
    <div class="tbmb f">
        <table>
            <tr><th>HAC</th><th>Abbr</th><th>Scientific<br/>notation</th></tr>
            <tr><td>1 HAC</td><td>1:248</td><td class="cr">1 x 10^248</td></tr>
            <tr><td>10 HAC</td><td>1:249</td><td class="cr">1 x 10^249</td></tr>
            <tr><td>100 HAC</td><td>1:250</td><td class="cr">1 x 10^250</td></tr>
            <tr><td>1000 HAC</td><td>1:251</td><td class="cr">1 x 10^251</td></tr>
            <tr><td>10000 HAC</td><td>1:252</td><td class="cr">1 x 10^252</td></tr>
        </table>
    </div>
    <div class="tbmb">
        <table>
            <tr><th>HAC</th><th>Abbr</th><th>Scientific<br/>notation</th></tr>
            <tr><td>0.1 HAC</td><td>1:247</td><td class="cr">1 x 10^247</td></tr>
            <tr><td>0.01 HAC</td><td>1:246</td><td class="cr">1 x 10^246</td></tr>
            <tr><td>0.001 HAC</td><td>1:245</td><td class="cr">1 x 10^245</td></tr>
            <tr><td>0.0001 HAC</td><td>1:244</td><td class="cr">1 x 10^244</td></tr>
            <tr><td>0.00001 HAC</td><td>1:243</td><td class="cr">1 x 10^243</td></tr>
        </table>
    </div>
    <div class="tbmb">
        <table>
            <tr><th>HAC</th><th>Abbr</th><th>Scientific<br/>notation</th></tr>
            <tr><td>12 HAC</td><td>12:248</td><td class="cr">12 x 10^248</td></tr>
            <tr><td>6789 HAC</td><td>6789:248</td><td class="cr">6789 x 10^248</td></tr>
            <tr><td>1.456 HAC</td><td>1456:245</td><td class="cr">1456 x 10^245</td></tr>
            <tr><td>0.172 HAC</td><td>172:245</td><td class="cr">172 x 10^245</td></tr>
            <tr><td>35.94 HAC</td><td>3594:246</td><td class="cr">3594 x 10^246</td></tr>
        </table>
    </div>
</div>

The unit format designed and displayed in this way allows HAC to achieve infinite segmentation while avoiding annoying readability and input issues. The cost is that it requires a certain learning, understanding, and adaptation process to quickly read the actual quantity of currency.


<script src="/jslib/doc/hac-unit.js"></script>


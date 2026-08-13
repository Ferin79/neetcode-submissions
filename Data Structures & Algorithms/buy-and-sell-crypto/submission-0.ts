class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0; // buy
        let r = 1; // sell
        let maxP = 0;

        while (r < prices.length) {
            // profitable ?

            if (prices[l] < prices[r]) {
                const profit = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
            } else {
                l = r;
            }
            r++;
        }

        return maxP;
    }
}

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     *
     * min = 25
     * [4,10,23,25]
     *
     * min = 4
     * [1,2,3,4]
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const k = Math.floor((l + r) / 2);

            let time = 0;
            for (const p of piles) {
                time += Math.ceil(p / k);
            }

            if (time <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }

        return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const records: Record<number, number> = {};

        nums.forEach((n) => {
            if (!records[n]) {
                records[n] = 1;
            } else {
                records[n] += 1;
            }
        });

        const results = Array(k).fill(0);

        for (let i = 0; i < results.length; i++) {
            let highestKey = null;
            Object.keys(records).forEach((key) => {
                if (highestKey === null) {
                    highestKey = +key;
                } else if (+records[key] > +records[highestKey]) {
                    highestKey = +key;
                }
            });
            results[i] = highestKey;
            delete records[highestKey];
        }

        return results;
    }
}

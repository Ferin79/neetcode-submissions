class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const records: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const a = nums[i];
            const numberToFind = target - a;

            if (records[numberToFind] != undefined) {
                const j = records[numberToFind];

                if (i > j) {
                    return [j, i];
                } else {
                    return [i, j];
                }
            } else {
                records[a] = i;
            }
        }
        return [0, 0];
    }
}

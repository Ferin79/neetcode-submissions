class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums);
        let longest = 0;

        numSet.forEach((n) => {
            if (!numSet.has(n - 1)) {
                let length = 0;
                while (numSet.has(n + length)) {
                    length++;
                }
                longest = Math.max(length, longest);
            }
        });

        return longest;
    }
}

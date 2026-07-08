class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output = Array(nums.length).fill(1);

        let prefix = 1;
        nums.forEach((n, i) => {
            output[i] = prefix;
            prefix *= n;
        });

        let postfix = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= postfix
            postfix *= nums[i]
        }

        return output
    }
}

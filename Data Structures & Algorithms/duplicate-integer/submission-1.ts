class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const records: Record<number, number> = {}

        for(let i = 0; i< nums.length; i++){
            const num = nums[i];

            if(records[num]){
                return true;
            } else {
                records[num] = 1;
            }
        }
        return false
    }
}

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let results = [0, 0];
        let i = 0;
        let j = numbers.length - 1;

        while ( i < j) {
            const a = numbers[i];
            const b = numbers[j];

            if (a + b === target) {
                return [i + 1, j + 1];
            } else if (a + b > target) {
                j--;
            } else {
                i++;
            }
        }

        return results;
    }
}

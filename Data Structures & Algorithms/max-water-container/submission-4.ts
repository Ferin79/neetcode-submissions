class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        // 1, 2, 10, 12, 24, 15

        let max = 0;
        let len = heights.length;
        let i = 0;
        let j = len - 1;

        while (i < j) {
            let distance = j - i;

            const a = heights[i];
            const b = heights[j];
            const min = Math.min(a, b);
            const vol = min * distance;

            if (vol > max) {
                max = vol;
            }

            if (a > b) {
                j--;
            } else {
                i++;
            }
        }

        return max;
    }
}

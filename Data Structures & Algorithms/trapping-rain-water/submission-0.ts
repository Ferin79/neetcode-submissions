class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if (!height.length) {
            return 0;
        }

        let l = 0;
        let r = height.length - 1;
        let leftMax = height[l];
        let rightMax = height[r];
        let result = 0;

        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                result += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                result += rightMax - height[r];
            }
        }

        return result;
    }
}

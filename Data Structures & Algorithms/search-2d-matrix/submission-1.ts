class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const len = matrix[0].length - 1;

        let i = 0;
        let j = len;

        while (i <= matrix.length - 1) {
            if (target === matrix[i][0] || target === matrix[i][j]) {
                return true;
            } else if (target < matrix[i][0]) {
                return false;
            } else if (target < matrix[i][j]) {
                let a = 0;
                let b = len;

                while (a < b) {
                    const mid = Math.floor((a + b) / 2);

                    if (matrix[i][mid] < target) {
                        a = mid + 1;
                    } else if (matrix[i][mid] > target) {
                        b = mid - 1;
                    } else {
                        return true;
                    }
                }
                return false;
            } else {
                i++;
                j = len;
            }
        }

        return false;
    }
}

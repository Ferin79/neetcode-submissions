class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let i = 0;
        let j = matrix.length - 1;
        let len = matrix[0].length - 1;

        while (i <= j) {
            const mid = Math.floor((i + j) / 2);

            if (target === matrix[mid][0] || target === matrix[mid][len]) {
                return true;
            } else if (target < matrix[mid][0]) {
                j = mid - 1;
            } else if (target > matrix[mid][len]) {
                i = mid + 1;
            } else {
                break;
            }
        }

        if (!(i <= j)) {
            return false;
        }

        const mid = Math.floor((i + j) / 2);
        let a = 0;
        let b = len;

        while (a <= b) {
            const m = Math.floor((a + b) / 2);

            if (target < matrix[mid][m]) {
                b = m - 1;
            } else if (target > matrix[mid][m]) {
                a = m + 1;
            } else {
                return true;
            }
        }

        return false;
    }
}

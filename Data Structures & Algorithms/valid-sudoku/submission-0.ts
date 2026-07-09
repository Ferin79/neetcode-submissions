class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const threeByThree: Record<string, Record<number, number>> = {};
        const rows: Record<string, number>[] = Array.from({ length: 9 }, () => ({}));
        const columns: Record<string, number>[] = Array.from({ length: 9 }, () => ({}));

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const value = board[i][j];
                if (value == ".") {
                    continue;
                }
                if (value in rows[i] || value in columns[j]) {
                    return false;
                }
                const blockRow = Math.floor(i / 3);
                const blockCol = Math.floor(j / 3);
                const blockKey = blockRow + "_" + blockCol;

                const threeBy = threeByThree[blockKey];

                // Check 3x3 grid
                if (threeBy && value in threeBy) {
                    return false;
                }

                // Record the value in the 3x3 grid safely
                if (!threeByThree[blockKey]) {
                    threeByThree[blockKey] = {};
                }
                threeByThree[blockKey][value] = 1;

                rows[i][value] = 1;
                columns[j][value] = 1;
            }
        }

        return true;
    }
}

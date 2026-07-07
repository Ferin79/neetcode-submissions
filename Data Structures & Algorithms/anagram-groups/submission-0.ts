class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length <= 1) {
            return [[...strs]];
        }

        const records: Record<string, string[]> = {};

        strs.forEach((s) => {
            const key = s.split("").sort().join();

            if (records[key]) {
                records[key] = [s, ...records[key]];
            } else {
                records[key] = [s];
            }
        });

        return Object.keys(records).map((key) => {
            return records[key];
        });
    }
}

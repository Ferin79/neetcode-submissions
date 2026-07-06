class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const records: Record<string, number> = {};

        for (let i = 0; i < s.length; i++) {
            const a = s[i];

            if (records[a]) {
                records[a] += 1;
            } else {
                records[a] = 1;
            }
        }

        for (let i = 0; i < t.length; i++) {
            const a = t[i];

            if (!records[a] || records[a] <= 0) {
                return false;
            }
            records[a]-=1
        }

        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    private isAlphanumeric(char: string): boolean {
        if (char.length !== 1) return false;

        const code = char.toLowerCase().charCodeAt(0);

        const isDigit = "0".charCodeAt(0) <= code && code <= "9".charCodeAt(0)
        const isLower = "a".charCodeAt(0) <= code && code <= "z".charCodeAt(0)

        return isDigit || isLower;
    }

    isPalindrome(s: string): boolean {
        let isPalindrome = true;

        let i = 0;
        let j = s.length - 1;

        while ( i < j && i < s.length && j >= 0) {
            const a = s[i];
            const b = s[j];

            if (!this.isAlphanumeric(a)) {
                i++;
                continue;
            }
            if (!this.isAlphanumeric(b)) {
                j--;
                continue;
            }

            if (a.toLowerCase() === b.toLowerCase()) {
                i++;
                j--;
            } else {
                isPalindrome = false;
                break;
            }
        }

        return isPalindrome;
    }
}

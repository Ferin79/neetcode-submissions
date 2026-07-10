class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    private isAlphanumeric(char: string): boolean {
        if (char.length !== 1) return false;

        const code = char.charCodeAt(0);

        const isDigit = code >= 48 && code <= 57;
        const isUpper = code >= 65 && code <= 90;
        const isLower = code >= 97 && code <= 122;

        return isDigit || isUpper || isLower;
    }

    isPalindrome(s: string): boolean {
        let isPalindrome = true;

        let i = 0;
        let j = s.length - 1;

        while (i !== j && i < s.length && j >= 0) {
            const a = s[i];
            const b = s[j];

            console.log(i,j)

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

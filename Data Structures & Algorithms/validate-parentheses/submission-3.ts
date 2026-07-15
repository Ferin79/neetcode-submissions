class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length < 2) {
            return false;
        }

        const stack: string[] = [];
        const opening = ["(", "{", "["];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (opening.includes(char)) {
                stack.push(char);
            } else {
                const pop = stack.pop();

                if (!pop) {
                    return false;
                } else if (char === "}" && pop !== "{") {
                    return false;
                } else if (char === ")" && pop !== "(") {
                    return false;
                } else if (char === "]" && pop !== "[") {
                    return false;
                }
            }
        }
        if (stack.length) {
            return false;
        }
        return true;
    }
}

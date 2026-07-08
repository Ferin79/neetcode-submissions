class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // 5#hello
        // 0123456

        if (strs.length === 0) {
            return "";
        }

        let encodedStr = "";

        strs.forEach((s, i) => {
            encodedStr += `${s.length}#${s}`;
        });

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str.length === 0) {
            return [];
        }

        if (str.length <= 2) {
            return [""];
        }

        console.log(str.length, str);

        const results = [];

        let i = 0;
        while (i < str.length) {
            let j = i;
            let length = "";

            while (str[j] !== "#") {
                length += str[j];
                j++;
            }

            const c = parseInt(length);

            const s = str.slice(j + 1, j + c + 1);

            results.push(s);

            i = j + c + 1;
        }

        return results;
    }
}

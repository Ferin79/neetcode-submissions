class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];

        tokens.forEach((s) => {
            const num = Number(s);

            if (Number.isNaN(num)) {
                const b = stack.pop();
                const a = stack.pop();

                if (s === "+") {
                    stack.push(a + b);
                } else if (s === "-") {
                    stack.push(a - b);
                } else if (s === "*") {
                    stack.push(a * b);
                } else {
                    stack.push(Math.trunc(a / b));
                }
            } else {
                stack.push(num);
            }
        });

        return stack.pop();
    }
}

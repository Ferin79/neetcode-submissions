type KeyStore = Record<string, [[number, string]]>;

class TimeMap {
    keyStore: KeyStore;

    constructor() {
        this.keyStore = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (this.keyStore[key]) {
            this.keyStore[key].push([timestamp, value]);
        } else {
            this.keyStore[key] = [[timestamp, value]];
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if (!this.keyStore[key]) {
            return "";
        }

        // [[1, x] ,[2, y], [3, z], [4, a], [5, b]]
        const values = this.keyStore[key];

        if (!values.length) {
            return "";
        }

        if (values[0][0] > timestamp) {
            return "";
        }

        let result = values[0][1];

        for (let i = 0; i < values.length; i++) {
            const val = values[i];

            if (val[0] === timestamp) {
                return val[1];
            } else if (val[0] < timestamp) {
                result = val[1];
            }
        }
        return result;
    }
}

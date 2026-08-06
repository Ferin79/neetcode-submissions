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
        let result = "";
        let l = 0;
        let r = values.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            const value = values[mid];

            if (value[0] === timestamp) {
                return value[1];
            } else if (value[0] < timestamp) {
                result = value[1];
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return result;
    }
}

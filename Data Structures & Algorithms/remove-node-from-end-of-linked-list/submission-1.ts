/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     *
     * [1,2,3,4,5,6,7,8]   n = 2
     * [1,2,3,4,5,6,8]
     *
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let len = 0;
        let curr = head;

        while (curr) {
            len++;
            curr = curr.next;
        }

        const nodeIndex = len - n;
        let pos = 0;
        curr = head;
        let prev = null;
        let newHead = null;

        while (pos < nodeIndex && curr) {
            if (prev === null) {
                newHead = curr;
            }
            prev = curr;
            curr = curr.next;
            pos++;
        }

        if (prev) {
            prev.next = curr.next;
        } else {
            prev = curr.next ? curr.next : null;
            newHead = curr.next ? curr.next : null;
        }

        return newHead;
    }
}

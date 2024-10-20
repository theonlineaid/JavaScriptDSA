/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Iteratively reverse the linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var reverseList = function(head) {
    let prev = null; // Previous node
    let current = head; // Current node

    while (current) {
        const nextTemp = current.next; // Store next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = nextTemp; // Move to the next node
    }

    return prev; // New head of the reversed list
};

/**
 * Recursively reverse the linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListRecursive = function(head) {
    // Base case: if head is null or only one node
    if (!head || !head.next) {
        return head;
    }

    const newHead = reverseListRecursive(head.next); // Reverse the rest of the list
    head.next.next = head; // Make the next node point to the current node
    head.next = null; // Set the current node's next to null

    return newHead; // Return the new head
};

// Example usage
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseList(head)); // Output: [5,4,3,2,1]

const head2 = new ListNode(1, new ListNode(2));
console.log(reverseList(head2)); // Output: [2,1]

const head3 = null;
console.log(reverseList(head3)); // Output: null

const head4 = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log(reverseListRecursive(head4)); // Output: [3,2,1]

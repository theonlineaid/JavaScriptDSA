/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create a dummy node to handle edge cases like removing the head
    const dummy = new ListNode(0);
    dummy.next = head;

    let first = dummy;
    let second = dummy;

    // Move `first` pointer `n + 1` steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until `first` reaches the end
    while (first) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node from the end
    second.next = second.next.next;

    // Return the head of the modified list
    return dummy.next;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next; // return the head of the linked list
}

// Helper function to print the linked list
function printLinkedList(head) {
    const values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    console.log(values.join(' -> '));
}

// Example 1: Input: head = [1,2,3,4,5], n = 2
const head1 = createLinkedList([1, 2, 3, 4, 5]);
const updatedHead1 = removeNthFromEnd(head1, 2);
printLinkedList(updatedHead1); // Output: [1, 2, 3, 5]

// Example 2: Input: head = [1], n = 1
const head2 = createLinkedList([1]);
const updatedHead2 = removeNthFromEnd(head2, 1);
printLinkedList(updatedHead2); // Output: []

// Example 3: Input: head = [1,2], n = 1
const head3 = createLinkedList([1, 2]);
const updatedHead3 = removeNthFromEnd(head3, 1);
printLinkedList(updatedHead3); // Output: [1]

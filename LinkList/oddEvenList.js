/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Rearranges the linked list so that all nodes at odd indices 
 * are grouped together followed by nodes at even indices.
 * @param {ListNode} head - The head of the linked list.
 * @return {ListNode} - The head of the modified linked list.
 */

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var oddEvenList = function(head) {
    // If the list is empty or has only one node
    if (!head || !head.next) {
        return head;
    }

    let odd = head; // Pointer for odd indexed nodes
    let even = head.next; // Pointer for even indexed nodes
    let evenHead = even; // Keep track of the start of even indexed nodes

    // Loop until we reach the end of the list
    while (even && even.next) {
        odd.next = even.next; // Link odd node to the next odd node
        odd = odd.next; // Move the odd pointer
        even.next = odd.next; // Link even node to the next even node
        even = even.next; // Move the even pointer
    }

    // Link the last odd node to the first even node
    odd.next = evenHead;

    return head; // Return the modified list head
};

// Example usage
const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const newHead1 = oddEvenList(head1);
console.log(newHead1); // Output: 1 -> 3 -> 5 -> 2 -> 4

const head2 = new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7)))))));
const newHead2 = oddEvenList(head2);
console.log(newHead2); // Output: 2 -> 3 -> 6 -> 1 -> 5 -> 4 -> 7

const head3 = new ListNode(1);
const newHead3 = oddEvenList(head3);
console.log(newHead3); // Output: 1

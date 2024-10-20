// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * Remove all elements from the linked list that have the specified value.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} val - The value to remove from the list.
 * @return {ListNode} - The head of the modified list.
 */
var removeElements = function(head, val) {
    // Create a dummy node that points to the head
    let dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy; // Use current to traverse the list

    while (current.next) {
        if (current.next.val === val) {
            // Skip the node with the specified value
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return dummy.next; // Return the head of the modified list
};

// Example usage
const head1 = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
const newHead1 = removeElements(head1, 6);
console.log(newHead1); // Output: [1, 2, 3, 4, 5]

const head2 = null; // Empty list
const newHead2 = removeElements(head2, 1);
console.log(newHead2); // Output: null

const head3 = new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7))));
const newHead3 = removeElements(head3, 7);
console.log(newHead3); // Output: null

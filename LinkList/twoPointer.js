// Definition for singly-linked list.
function ListNode(val) {
    this.val = (val === undefined ? 0 : val);
    this.next = null;
}

/**
 * Detect if there is a cycle in the linked list.
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Initialize slow & fast pointers
    let slow = head;
    let fast = head;

    // Traverse the list
    while (slow && fast && fast.next) {
        slow = slow.next;          // move slow pointer one step
        fast = fast.next.next;    // move fast pointer two steps

        // Check if the two pointers meet
        if (slow === fast) {
            return true;          // Cycle detected
        }
    }
    
    return false;                 // No cycle found
};

// Example usage
const head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Create a cycle

console.log(hasCycle(head)); // Output: true

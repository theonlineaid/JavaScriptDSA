/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Create a dummy node to simplify the result list
    let dummy = new ListNode(0);
    let current = dummy; // Pointer to build the result list
    let carry = 0;       // Carry variable to handle sums over 10

    // Traverse both lists
    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry; // Start with the carry

        if (l1 !== null) {
            sum += l1.val; // Add the value from l1 if available
            l1 = l1.next;  // Move to the next node in l1
        }

        if (l2 !== null) {
            sum += l2.val; // Add the value from l2 if available
            l2 = l2.next;  // Move to the next node in l2
        }

        // Update the carry and create a new node for the result
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10); // Store the digit in the result
        current = current.next; // Move the current pointer
    }

    // The merged list starts from the next of the dummy node
    return dummy.next;
};

// Example usage
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

// Create test lists
let l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Represents 342
let l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Represents 465

let result = addTwoNumbers(l1, l2);
printList(result); // Output: [7, 0, 8]

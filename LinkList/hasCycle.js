/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false; // No nodes or only one node
    }
    
    let slow = head; // Tortoise
    let fast = head; // Hare

    while (fast && fast.next) {
        slow = slow.next;         // Move slow by one step
        fast = fast.next.next;   // Move fast by two steps

        if (slow === fast) {     // Cycle detected
            return true;
        }
    }

    return false; // No cycle
};


// Create nodes
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

// Connect nodes to form a cycle
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Cycle here

console.log(hasCycle(node1)); // Output: true

// Create a non-cyclic list
const node5 = new ListNode(1);
const node6 = new ListNode(2);
node5.next = node6;

console.log(hasCycle(node5)); // Output: false



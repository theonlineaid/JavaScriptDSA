/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null; // No nodes or only one node
    }
    
    let slow = head; // Tortoise
    let fast = head; // Hare

    // Step 1: Detect if there is a cycle
    while (fast && fast.next) {
        slow = slow.next;         // Move slow by one step
        fast = fast.next.next;   // Move fast by two steps

        if (slow === fast) {     // Cycle detected
            // Step 2: Find the start of the cycle
            let entry = head; // Reset entry pointer to head
            while (entry !== slow) {
                entry = entry.next; // Move entry pointer by one step
                slow = slow.next;    // Move slow pointer by one step
            }
            return entry; // The start of the cycle
        }
    }

    return null; // No cycle
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

console.log(detectCycle(node1)); // Output: Node with value 2

// Create a non-cyclic list
const node5 = new ListNode(1);
const node6 = new ListNode(2);
node5.next = node6;

console.log(detectCycle(node5)); // Output: null

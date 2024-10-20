/**
 * // Definition for a Node.
 * function Node(val, prev, next, child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

// Definition for a Node.
function Node(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    if (!head) return head;  // Return null if the list is empty

    let current = head;  // Start from the head of the list

    while (current !== null) {
        // If the current node has a child, we need to flatten it
        if (current.child) {
            let child = current.child;
            let next = current.next;  // Store the next node

            // Flatten the child list
            let flattenedChild = flatten(child);

            // Insert the flattened child list between current and next
            current.next = flattenedChild;
            flattenedChild.prev = current;
            current.child = null;  // Clear the child pointer after flattening

            // Traverse to the end of the flattened child list
            let last = flattenedChild;
            while (last.next !== null) {
                last = last.next;
            }

            // Connect the last node of the flattened child list to next node
            if (next !== null) {
                last.next = next;
                next.prev = last;
            }
        }

        // Move to the next node in the list
        current = current.next;
    }

    return head;  // Return the head of the flattened list
};

// Helper function to print the list in console
function printList(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// Creating a sample multilevel doubly linked list
let node12 = new Node(12, null, null, null);
let node11 = new Node(11, null, node12, null);
node12.prev = node11;

let node10 = new Node(10, null, null, null);
let node9 = new Node(9, null, node10, null);
let node8 = new Node(8, null, node9, node11);
let node7 = new Node(7, null, node8, null);
node9.prev = node8;
node8.prev = node7;

let node6 = new Node(6, null, null, null);
let node5 = new Node(5, null, node6, null);
let node4 = new Node(4, null, node5, null);
let node3 = new Node(3, null, node4, node7);
let node2 = new Node(2, null, node3, null);
let node1 = new Node(1, null, node2, null);
node6.prev = node5;
node5.prev = node4;
node4.prev = node3;
node3.prev = node2;
node2.prev = node1;

// Print original list
console.log("Original List:");
printList(node1);

// Flatten the list
let flattenedHead = flatten(node1);

// Print flattened list
console.log("Flattened List:");
printList(flattenedHead);

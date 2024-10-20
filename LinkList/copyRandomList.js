/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

// Definition for a Node.
function Node(val, next, random) {
    this.val = val;
    this.next = next || null;
    this.random = random || null;
}


var copyRandomList = function (head) {
    if (!head) return null; // Return null if the list is empty

    // Step 1: Create new nodes and interweave with the original list
    let current = head;
    while (current !== null) {
        let newNode = new Node(current.val, current.next, null); // Create the new node
        current.next = newNode; // Link the new node after the original node
        current = newNode.next; // Move to the next original node
    }

    // Step 2: Assign random pointers for the new nodes
    current = head;
    while (current !== null) {
        if (current.random !== null) {
            current.next.random = current.random.next; // Assign random pointer for the new node
        }
        current = current.next.next; // Move to the next original node
    }

    // Step 3: Separate the original and copied lists
    current = head;
    let copiedHead = head.next; // The head of the copied list
    let copiedCurrent = copiedHead;

    while (current !== null) {
        current.next = current.next.next; // Restore the original list
        if (copiedCurrent.next !== null) {
            copiedCurrent.next = copiedCurrent.next.next; // Move the copied list
        }
        current = current.next;
        copiedCurrent = copiedCurrent.next;
    }

    return copiedHead; // Return the head of the deep-copied list
};

// Helper function to print a linked list
function printList(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push({
            val: current.val,
            random: current.random ? current.random.val : null,
        });
        current = current.next;
    }
    console.log(result);
}

// Create the test case linked list as [[7,null],[13,0],[11,4],[10,2],[1,0]]
let node5 = new Node(1);
let node4 = new Node(10);
let node3 = new Node(11);
let node2 = new Node(13);
let node1 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Set random pointers
node1.random = null;
node2.random = node1;
node3.random = node5;
node4.random = node3;
node5.random = node1;

// Print original list
console.log("Original list:");
printList(node1);

// Copy the list
let copiedList = copyRandomList(node1);

// Print copied list
console.log("Copied list:");
printList(copiedList);

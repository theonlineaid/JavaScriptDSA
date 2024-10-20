/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) return head; // Edge cases

    // Step 1: Determine the length of the list and make it circular
    let length = 1; // Length of the list
    let tail = head; // Pointer to the last node

    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    // Step 2: Make the list circular
    tail.next = head;

    // Step 3: Calculate the effective number of rotations
    k = k % length; // Reduce k if it's greater than the length of the list
    let stepsToNewHead = length - k;

    // Step 4: Find the new tail and new head
    let newTail = head;
    for (let i = 1; i < stepsToNewHead; i++) {
        newTail = newTail.next;
    }

    let newHead = newTail.next;

    // Step 5: Break the cycle
    newTail.next = null;

    return newHead;
};

// Helper function to print the linked list
function printList(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// Create the test case linked list [1,2,3,4,5]
let node5 = new ListNode(5);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

// Print original list
console.log("Original list:");
printList(node1);

// Rotate the list to the right by k = 2
let rotatedList = rotateRight(node1, 2);

// Print rotated list
console.log("Rotated list:");
printList(rotatedList);

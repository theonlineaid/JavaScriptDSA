/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null; // If either list is null, no intersection
    }

    let pointerA = headA;
    let pointerB = headB;

    // Traverse both lists
    while (pointerA !== pointerB) {
        // When reaching the end of one list, redirect to the other list's head
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    // Either both are null (no intersection) or they meet at the intersection node
    return pointerA; 
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

// Create two linked lists that intersect
const intersectingNode = new ListNode(8);
intersectingNode.next = new ListNode(4);
intersectingNode.next.next = new ListNode(5);

// List A: 4 -> 1 -> 8 -> 4 -> 5
const headA = createLinkedList([4, 1]);
headA.next.next = intersectingNode; // Linking to the intersection node

// List B: 5 -> 6 -> 1 -> 8 -> 4 -> 5
const headB = createLinkedList([5, 6, 1]);
headB.next.next.next = intersectingNode; // Linking to the intersection node

// Call the getIntersectionNode function
const intersectionNode = getIntersectionNode(headA, headB);

// Check and output the result
if (intersectionNode) {
    console.log(`Intersected at '${intersectionNode.val}'`); // Output: Intersected at '8'
} else {
    console.log('No intersection');
}

// Additional test case with no intersection
const headC = createLinkedList([2, 6, 4]); // List C: 2 -> 6 -> 4
const headD = createLinkedList([1, 5]);     // List D: 1 -> 5

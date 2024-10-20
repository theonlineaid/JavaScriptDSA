// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * Function to check if the length of the linked list is even
 * @param {ListNode} head
 * @return {boolean}
 */
var isLengthEven = function (head) {
    let count = 0;  // Initialize the count

    while (head !== null) {
        count++;        // Increment the counter for each node
        head = head.next;  // Move to the next node
    }

    // If count is divisible by 2, return true (even length), else false (odd length)
    return count % 2 === 0;
};

// Helper function to create a linked list from an array
function createList(arr) {
    let head = null;
    let current = null;

    for (let i = 0; i < arr.length; i++) {
        let newNode = new ListNode(arr[i]);
        if (!head) {
            head = newNode;
            current = head;
        } else {
            current.next = newNode;
            current = current.next;
        }
    }

    return head;
}

// Test case 1: Linked list [12, 52, 10, 47, 95, 0] -> length is 6 (even)
let list1 = createList([12, 52, 10, 47, 95, 0]);
console.log(isLengthEven(list1));  // true

// Test case 2: Linked list [9, 4, 3] -> length is 3 (odd)
let list2 = createList([9, 4, 3]);
console.log(isLengthEven(list2));  // false

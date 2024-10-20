/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * Check if the linked list is a palindrome.
 * @param {ListNode} head - The head of the linked list.
 * @return {boolean} - True if the list is a palindrome, false otherwise.
 */
var isPalindrome = function(head) {
    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    
    // Move fast pointer at 2x speed and slow pointer at 1x speed
    while (fast && fast.next) {
        slow = slow.next;        // Move slow by 1
        fast = fast.next.next;   // Move fast by 2
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let current = slow;
    while (current) {
        const nextTemp = current.next; // Store next node
        current.next = prev;            // Reverse the link
        prev = current;                 // Move prev to current
        current = nextTemp;             // Move to the next node
    }

    // Step 3: Compare the first half and the reversed second half
    let left = head;
    let right = prev; // This is the head of the reversed second half
    while (right) {
        if (left.val !== right.val) {
            return false; // If values are not equal, it's not a palindrome
        }
        left = left.next;
        right = right.next;
    }

    return true; // If we made it here, it's a palindrome
};

// Example usage
const head1 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(head1)); // Output: true

const head2 = new ListNode(1, new ListNode(2));
console.log(isPalindrome(head2)); // Output: false

const head3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))));
console.log(isPalindrome(head3)); // Output: true

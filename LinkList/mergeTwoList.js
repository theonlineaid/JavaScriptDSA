/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to help simplify the merging process
    let dummy = new ListNode(0);
    let current = dummy; // Pointer to build the new list

    // Merge the two lists
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1; // Attach list1 node to the merged list
            list1 = list1.next;    // Move to the next node in list1
        } else {
            current.next = list2; // Attach list2 node to the merged list
            list2 = list2.next;    // Move to the next node in list2
        }
        current = current.next; // Move the current pointer
    }

    // At this point, at least one of the lists is null
    // Attach the remaining elements of list1 or list2
    if (list1 !== null) {
        current.next = list1; // If list1 has remaining nodes, attach them
    } else {
        current.next = list2; // If list2 has remaining nodes, attach them
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
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let mergedList = mergeTwoLists(list1, list2);
printList(mergedList); // Output: [1, 1, 2, 3, 4, 4]

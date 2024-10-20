// Definition for singly-linked list node
function ListNode(val) {
    this.val = val; // value of the node
    this.next = null; // pointer to the next node
}

var MyLinkedList = function () {
    this.head = null; // head of the linked list
    this.size = 0; // keep track of the size of the linked list
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1; // index is invalid
    }

    let current = this.head; // start from the head
    for (let i = 0; i < index; i++) {
        current = current.next; // move to the next node
    }

    return current.val; // return the value at the index
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new ListNode(val); // create a new node
    newNode.next = this.head; // point new node's next to the current head
    this.head = newNode; // update head to the new node
    this.size++; // increment size
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new ListNode(val); // create a new node
    if (this.size === 0) {
        this.head = newNode; // if list is empty, make it the head
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next; // move to the last node
        }
        current.next = newNode; // append new node to the end
    }
    this.size++; // increment size
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) {
        return; // index is invalid
    }

    if (index === 0) {
        this.addAtHead(val); // if index is 0, add at head
        return;
    }

    const newNode = new ListNode(val); // create a new node
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next; // move to the node before the index
    }

    newNode.next = current.next; // point new node's next to the current node's next
    current.next = newNode; // link current node to the new node
    this.size++; // increment size
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return; // index is invalid
    }

    if (index === 0) {
        this.head = this.head.next; // if deleting the head, move head to the next node
    } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next; // move to the node before the index
        }
        current.next = current.next.next; // unlink the node at index
    }
    this.size--; // decrement size
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */



var myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);        // Linked list: 1
myLinkedList.addAtTail(3);        // Linked list: 1 -> 3
myLinkedList.addAtIndex(1, 2);    // Linked list: 1 -> 2 -> 3
console.log(myLinkedList.get(1));  // Output: 2
myLinkedList.deleteAtIndex(1);     // Linked list: 1 -> 3
console.log(myLinkedList.get(1));  // Output: 3

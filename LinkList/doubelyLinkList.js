class ListNode {
    constructor(val, prev = null, next = null) {
        this.val = val;   // The value of the node
        this.prev = prev; // Pointer to the previous node
        this.next = next; // Pointer to the next node
    }
}

class MyLinkedList {
    constructor() {
        this.head = null; // Head of the linked list
        this.tail = null; // Tail of the linked list
        this.size = 0;    // Size of the linked list
    }

    // Get the value of the indexth node
    get(index) {
        if (index < 0 || index >= this.size) {
            return -1; // Invalid index
        }
        let currentNode;
        if (index < this.size / 2) {
            currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
        } else {
            currentNode = this.tail;
            for (let i = this.size - 1; i > index; i--) {
                currentNode = currentNode.prev;
            }
        }
        return currentNode.val; // Return the value at index
    }

    // Add a node of value val before the first element
    addAtHead(val) {
        const newNode = new ListNode(val);
        if (this.size === 0) {
            this.head = this.tail = newNode; // List was empty
        } else {
            newNode.next = this.head;        // Point new node to the current head
            this.head.prev = newNode;        // Point current head's previous to new node
            this.head = newNode;             // Update head to the new node
        }
        this.size++;
    }

    // Append a node of value val as the last element
    addAtTail(val) {
        const newNode = new ListNode(val);
        if (this.size === 0) {
            this.head = this.tail = newNode; // List was empty
        } else {
            newNode.prev = this.tail;        // Point new node to the current tail
            this.tail.next = newNode;        // Point current tail's next to new node
            this.tail = newNode;             // Update tail to the new node
        }
        this.size++;
    }

    // Add a node of value val before the indexth node
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) {
            return; // Index out of bounds
        }
        if (index === 0) {
            this.addAtHead(val); // Insert at head
        } else if (index === this.size) {
            this.addAtTail(val); // Insert at tail
        } else {
            const newNode = new ListNode(val);
            let currentNode;
            if (index < this.size / 2) {
                currentNode = this.head;
                for (let i = 0; i < index; i++) {
                    currentNode = currentNode.next;
                }
            } else {
                currentNode = this.tail;
                for (let i = this.size - 1; i > index; i--) {
                    currentNode = currentNode.prev;
                }
            }
            // Insert the new node before currentNode
            newNode.prev = currentNode.prev;
            newNode.next = currentNode;
            currentNode.prev.next = newNode;
            currentNode.prev = newNode;
            this.size++;
        }
    }

    // Delete the indexth node
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return; // Invalid index
        }
        if (index === 0) {
            if (this.size === 1) {
                this.head = this.tail = null; // List becomes empty
            } else {
                this.head = this.head.next;   // Move head to the next node
                this.head.prev = null;        // Set the new head's prev to null
            }
        } else if (index === this.size - 1) {
            this.tail = this.tail.prev;     // Move tail to the previous node
            this.tail.next = null;           // Set the new tail's next to null
        } else {
            let currentNode;
            if (index < this.size / 2) {
                currentNode = this.head;
                for (let i = 0; i < index; i++) {
                    currentNode = currentNode.next;
                }
            } else {
                currentNode = this.tail;
                for (let i = this.size - 1; i > index; i--) {
                    currentNode = currentNode.prev;
                }
            }
            // Bypass the current node
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }
        this.size--;
    }
}

// Example usage
const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // Linked list becomes 1->2->3
console.log(myLinkedList.get(1));  // Returns 2
myLinkedList.deleteAtIndex(1);     // Now the linked list becomes 1->3
console.log(myLinkedList.get(1));  // Returns 3

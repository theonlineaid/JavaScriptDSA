class Node {
    constructor(data) {
        this.data = data; // Data part of the node
        this.next = null; // Pointer to the next node
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; // Head of the list
        this.length = 0;  // Length of the list
    }

    // Method to add a node at the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // If the list is empty, make the new node the head
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse to the last node
            }
            current.next = newNode; // Link the new node
        }
        this.length++;
    }

    // Method to delete a node by value
    delete(data) {
        if (!this.head) return; // If the list is empty, return
        if (this.head.data === data) {
            this.head = this.head.next; // If the head needs to be deleted
            this.length--;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next; // Bypass the node to be deleted
                this.length--;
                return;
            }
            current = current.next; // Move to the next node
        }
    }

    // Method to search for a node by value
    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) return current; // Return the node if found
            current = current.next; // Move to the next node
        }
        return null; // Return null if not found
    }

    // Method to traverse the list and print its elements
    traverse() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.data); // Collect node data
            current = current.next; // Move to the next node
        }
        console.log(elements.join(' -> ')); // Print the list
    }
}

// Example Usage
const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.traverse(); // Output: 1 -> 2 -> 3

list.delete(2);
list.traverse(); // Output: 1 -> 3

const foundNode = list.search(3);
console.log(foundNode ? `Found: ${foundNode.data}` : 'Not Found'); // Output: Found: 3

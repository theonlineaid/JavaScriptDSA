function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the element is found
        }
    }
    return -1; // Return -1 if the element is not found
}

// Example usage:
let arr = [3, 5, 1, 4, 2];
let target = 4;
let result = linearSearch(arr, target);
console.log(result); // Output: 3 (because 4 is at index 3)

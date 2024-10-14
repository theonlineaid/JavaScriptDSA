function binarySearch(arr, target) {
    // Step 1: Sort the array (if unsorted)
    arr.sort((a, b) => a - b); // Sorting in ascending order

    let left = 0;
    let right = arr.length - 1;

    // Step 2: Perform Binary Search
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return index if found
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Not found
}

// Example usage:
let arr = [3, 5, 1, 4, 2];
let target = 4;
let result = binarySearch(arr, target);
console.log(result); // Output: 3 (after sorting, 4 is at index 3)

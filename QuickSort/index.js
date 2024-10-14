function quickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot (using the last element in this case)
    const pivot = arr[arr.length - 1];
    const left = [];   // Elements less than the pivot
    const right = [];  // Elements greater than the pivot

    // Partition the array into left and right sub-arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively apply quickSort to the left and right sub-arrays
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(array);
console.log("Sorted Array:", sortedArray);

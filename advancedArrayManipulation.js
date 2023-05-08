// Filename: advancedArrayManipulation.js
// Author: Senior JavaScript Developer
// Description: Advanced Array Manipulation Sample for GitHub

class AdvancedArrayManipulation {
  constructor(arr) {
    this.arr = arr;
  }

  // Remove duplicates from the array using a Set
  removeDuplicates() {
    this.arr = [...new Set(this.arr)];
    return this;
  }

  // Sort the array in ascending order using the quick sort algorithm
  quickSort() {
    const _quickSort = (arr, left, right) => {
      if (left < right) {
        const pivotIndex = partition(arr, left, right);
        _quickSort(arr, left, pivotIndex - 1);
        _quickSort(arr, pivotIndex + 1, right);
      }
    };

    const partition = (arr, left, right) => {
      const pivot = arr[right];
      let i = left - 1;

      for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }

      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
      return i + 1;
    };

    _quickSort(this.arr, 0, this.arr.length - 1);
    return this;
  }

  // Map array elements using a custom function
  customMap(fn) {
    this.arr = this.arr.map(fn);
    return this;
  }

  // Filter array elements using a custom function
  customFilter(fn) {
    this.arr = this.arr.filter(fn);
    return this;
  }

  // Reduce array elements using a custom function
  customReduce(fn, initialValue) {
    this.arr = [this.arr.reduce(fn, initialValue)];
    return this;
  }

  // Get the final result
  getResult() {
    return this.arr;
  }
}

// Usage example
const exampleArray = [4, 2, 7, 4, 8, 2, 9];

const advancedArrayManipulation = new AdvancedArrayManipulation(exampleArray)
  .removeDuplicates()
  .quickSort()
  .customMap((x) => x * 2)
  .customFilter((x) => x > 10)
  .customReduce((acc, x) => acc + x, 0);

console.log(advancedArrayManipulation.getResult()); // Output: 46
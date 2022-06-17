
function bubbleSort(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 1; j < arr.length; j++) {
  //     if (arr[j] < arr[j - 1]) {
  //       let temp = arr[j]
  //       arr[j] = arr[j - 1]
  //       arr[j - 1] = temp
  //     }
  //   }
  // }

  let swapped = true;
  while (swapped) {

    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true
        // Do not move this console.log
        console.log(arr.join(","));
      }
    }
    // If you get to the end of the array and no swaps have occurred, return
    if (!swapped) return arr;
  }
  return arr
  // Otherwise, repeat from the beginning
}

console.log(bubbleSort([2, 4, 6, 8, 1, 3, 5, 7, 9]))
module.exports = bubbleSort;

// function bubbleSort(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       count++;
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log("Count:", count);
//   return arr;
// }

// console.log(
//   bubbleSort([2, 16, 3, 22, 65, 70, 54, 212, 4, 32, 1, 3445, 2, 23, 76, 7])
// );

// function bubbleSort2(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       count++;
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log("Count:", count);
//   return arr;
// }

// console.log(
//   bubbleSort2([2, 16, 3, 22, 65, 70, 54, 212, 4, 32, 1, 3445, 2, 23, 76, 7])
// );

// function bubbleSort3(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1; j++) {
//       count++;
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   console.log("Count:", count);
//   return arr;
// }

// console.log(
//   bubbleSort3([2, 16, 3, 22, 65, 70, 54, 212, 4, 32, 1, 3445, 2, 23, 76, 7])
// );

// function bubbleSort(arr) {
//   // Outer loop for each element
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false; // Initialize 'swapped' to false on each iteration

//     // Inner loop for comparing the adjacent elements
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       // Compare adjacent elements
//       if (arr[j] > arr[j + 1]) {
//         // Swap if they are in the wrong order
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }

//     // If no two elements were swapped by the inner loop, then the array is sorted
//     if (!swapped) break;
//   }

//   return arr;
// }

// console.log(bubbleSort([1, 4, 22, 6, 423, 7, 545, 3, 56, 23]));

function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(merge([1, 4, 6, 8], [2, 5, 32, 46]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));

  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 4, 6, 8, 2, 5, 32, 46]));

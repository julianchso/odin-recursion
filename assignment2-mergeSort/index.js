// merge sort pseudocode
// on input of n elements
//   if n < 2
//     return
//   else
//     sort left half of elements
//     sort right half of elements
//     merge sorted halves

function mergeSortRec(arr) {
  if (arr.length == 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let arrLeft = mergeSortRec(arr.slice(0, mid));
  let arrRight = mergeSortRec(arr.slice(mid));
  let arrSorted = [];

  let i = 0;
  let j = 0;

  console.log(`left ${arrLeft.length}`);
  console.log(`left ${arrRight.length}`);
  while (i <= arrLeft.length && j <= arrRight.length) {
    if (arrLeft[i] <= arrRight[j]) {
      arrSorted.push(arrLeft[i]);
      i++;
    } else {
      arrSorted.push(arrRight[j]);
      j++;
    }
  }
  // while (i <= arrLeft.length) arrSorted.push(arrLeft[i++]);
  // while (i <= arrRight.length) arrSorted.push(arrRight[i++]);

  console.log(arrSorted);
  return arrSorted;
}

mergeSortRec([4, 1, 7, 2, 5, 3, 6, 8]);

function fibs(n) {
  let arr = [];

  let a = 0;
  let b = 1;
  let temp;

  if (n >= 1) {
    arr.push(a);
  }

  for (let i = 1; i < n; i++) {
    arr.push(b);
    temp = a + b;
    a = b;
    b = temp;
  }
  return arr;
}

// console.log(fibs(20));

let fibsRec = function (n) {
  if (n <= 1) {
    return [0, 1];
  } else {
    let arrRec = fibsRec(n - 1);
    arrRec.push(arrRec[arrRec.length - 1] + arrRec[arrRec.length - 2]);
    console.log(arrRec[arrRec.length - 1]);
    return arrRec;
  }
};

console.log(fibsRec(7));

// merge sort pseudocode
// on input of n elements
//   if n < 2
//     return
//   else
//     sort left half of elements
//     sort right half of elements
//     merge sorted halves

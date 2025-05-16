function arrayIntersection(arr1, arr2) {
  let arrayIntersection = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !arrayIntersection.includes(arr1[i])) {
      arrayIntersection.push(arr1[i]);
    }
  }

  return arrayIntersection;
}

// Solution 2

function arrayIntersection2(arr1, arr2) {
  let newSet = new Set(arr1);
  let arrayIntersection = [];

  for (let num of arr2) {
    if (newSet.has(num)) {
      arrayIntersection.push(num);
    }
  }

  return arrayIntersection;
}
console.log(arrayIntersection2([1, 2, 2], [2, 4, 5, 1]));
module.exports = arrayIntersection;

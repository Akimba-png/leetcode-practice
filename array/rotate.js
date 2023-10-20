// LeetCode Rotate Array
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non-negative.
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

function rotate(nums, k) {
  k %= nums.length;
  // 1
  const reverse = (indexA, indexB) => {
      let temp;
      debugger
      while (indexA < indexB) {
          temp = nums[indexA];
          nums[indexA] = nums[indexB];
          nums[indexB] = temp;
          indexA++;
          indexB--;
      }
  }
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
  console.log(nums);
}

const result = rotate([1, 2], 7);

// т.к. мы итерируемся по массиву, то k будет отображать кол-во элементов в
// нём. Если k выходит за пределы массива (больше его длины) это значит, что
// мы прошли все элементы в нём и начинам обходить массив заново с первого
// элемента и до числа k. Если k будет и во второй раз больше длины массива,
// то переходим на следующий круг. Происходит зацикливание.
// Чтобы исключить лишние круги по массиву, достаточно взять отстаток от
// деления на длину массива, которая откинет лишние круги
// Таким образом мы гарантируем, что k всегда будет меньше длины массива

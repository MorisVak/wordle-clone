const reduce = (array, accu, start) => {
  for (let i = 0; i < array.length; i++) return accu;
};

const map = (array, i) => {
  if (i < 0) {
    return array;
  } else {
    array[i] = array[i] * 2;
    return map(array, i - 1);
  }
};

const array = [1, 2, 3, 4];

const test = map(array, array.length - 1);

//const test = map(array, array.length - 1); --> map ([1, 2, 3, 4],3) --> map([1, 2, 3, 8],2) --> map([1, 2, 6, 8],1) --> map([1, 4, 6, 8],1) --> map([2, 4, 6, 8],0)
// [2, 4, 6, 8]

console.log(test);

// HIGH ORDER ARR METHODS (do not modify the existing arr but returns a new one)
// additional info => the callback in forEach loop also takes three arg (val,indx,arr) nd the diff b/w forEach nd map is that; forEach DOES NOT return new arr jst perform operations on el of existing arr; map DOES return a new arr by performing opr on el of arr

let arr = [45, 23, 21];
// Array map method
let a = arr.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index; //will be returned in new arr i-e: a
});
// console.log(a);

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((a) => {
  return a < 10; //will filter those el that r less than 10 nd will return them in the form of new arr
});
// console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1];
//made the callback separately to improve concepts
// also here h1 nd h2 r prev nd next val/el respectively 
const reduce_func = (h1, h2) => {
  return h1 + h2;
};
let newarr3 = arr3.reduce(reduce_func);
console.log(newarr3);


//var: globally scoped- can be updated nd redeclared (sometimes introduce bugs in ur code)
//let: block scoped- can be only be updated not redeclared
//const: block scoped- can neither be updated nor redeclared

var a = 55;
a = 89; //updated
// var a= 78; //redeclared
console.log(a);

let b = "hello";
// b = 67;
// let b = 67; throws err
console.log(b);
{
  let b = "world";
  console.log(b);
} //use of let in block

const c = "constant";
// c = 22; throws err
// const c = 90; throws err
console.log(c);

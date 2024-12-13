// nn bb ss u - 7 Primitive data types in Js- in build
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g; //or let g= undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof c); //can also check da type 

// Non primitive datatypes- Objects 
let student={
    stuName : "Alisha",
    rollNo: 640,
    class : "M1",
    isPass : "true",
};
console.log(student["stuName"]);

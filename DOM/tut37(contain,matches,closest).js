// READ THESE METHODS FROM NOTES

// accessing the el that will be used 
let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");

console.log(id1);
// el.matches(css) =>if the el matches css inside braces 
console.log(id1.matches(".class")); //false
console.log(id1.matches(".box")); //true

// el.closest(css) =>does the css matches by any nearest el or ancestors...el checks itself too
console.log(sp1.closest("#sp1")); //true
console.log(sp1.closest(".box")); //true

// el1.contain(el2) =>does el1 contains el2 inside it 
console.log(id1.contains(sp1)); //true
console.log(sp1.contains(sp1)); //true
console.log(sp1.contains(id1)); //false

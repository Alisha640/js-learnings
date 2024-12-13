// PROTOTYPES IN OOP

let obj1 = {
  myname: "Alisha",
  age: 19,
  section: "A",
};

console.log(obj1);
console.log(obj1.toString()); //it's one of the methods of prototype

let obj2 = {
  run: () => {
    alert("Hello World");
  },
};

obj2.__proto__ = {
  gender: "female",
};

// obj1.run(); //dis gives err as there is no such func in obj1
// solution to this: set obj1's prototype equal to obj2 to access that function (this is prototpal inheritance i-e: when we try to get a property from js obj that is not present in it, js takes that missing property from the prototype of that obj)
// (and if we put the val in obj1 too then js will get that val in obj1 nd won't find it in it's prototype)

obj1.__proto__ = obj2;
obj1.run(); //now it works
console.log(obj1.gender); //working; first it checks in obj1, dont get da val then check its proto which is equal to obj2, dont find val in obj2 then check obj2's proto which is set as an obj nd gets the val. that's how prototype chaining occurs

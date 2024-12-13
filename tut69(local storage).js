// local storage stores data for particular domain nd when u send request it doesn't send that data along w the req as cookies do, that's how they r diff fron cookies

let key = prompt("Enter the key:");
let value = prompt("Enter the value:");
// setItem sets a key nd val in local storage
localStorage.setItem(key, value);
// if u want to view the val at key u can get it by getItem
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// if u want remove something u can use removeItem()
if (key == "red" || key == "blue") {
  localStorage.removeItem(key);
}
// if i give any key named red/blue it won't save in local storage

//if u want to check the no of items in local storage u can use length property
console.log(localStorage.length);

// if u want to get the key at a particular index
console.log(localStorage.key(0));

// if u want to clear everything from localStorage
if (key == 0) {
  localStorage.clear();
}

// To upload larger data on the server we send a post request cuz get request can send limited data
// ex of fetch api get request;
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// POST REQUEST- by using fetch api syntax;
// let options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Ak",
//     body: "I am Alisha",
//     userId: 1,
//   }),
// };

// let promise = fetch("https://jsonplaceholder.typicode.com/posts", options);
// promise
// .then((response) => {
//     return response.json();
// })
// .then((json) => {
//     console.log(json);
// });

// Let's see how to use async await syntax w fetch api
// const foo = async () => {
//   let options = {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "Ak",
//       body: "I am Alisha",
//       userId: 1,
//     }),
//   };

//   let promise = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     options
//   );
//   let result = await promise.json();
//   return result;
// };

// const getfoo_id = async (id) => {
//   let promise2 = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/" + id
//   );
//   let output = await promise2.json();
//   return output;
// };

// const mainfunc = async () => {
//   let getfoo = await foo();
//   console.log(getfoo);
//   console.log(await getfoo_id(5));
// };

// mainfunc();

// now u can pass todo (any variable name in which u store the body content) nd create it later
const foo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };

  let promise = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  let result = await promise.json();
  return result;
};

const getfoo_id = async (id) => {
  let promise2 = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  let output = await promise2.json();
  return output;
};

const mainfunc = async () => {
  let todo = {
    title: "Ak",
    body: "I am Alisha",
    userId: 1,
  };
  let getfoo = await foo(todo);
  console.log(getfoo);
  console.log(await getfoo_id(5));
};

mainfunc();

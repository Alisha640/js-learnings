// STUDY THIS TOPIC FROM NOTES FOR BETTER CONCEPTS
// It was an old method: to use AJAX(asyc javascript XML) to send a network req nd get/fetch data. it is still used
// now we prefer using fetch nd json to do this

// syntax of fetching API;

// let promise= fetch(url,[options]) when there is nothing in option section ur url is treated as a simple get request (means u r jst fetching data from the url to perform some operations later)
// promise.then((response)=>{
//     return response.json()
// }).then((value)=>{
//     console.log(value)
// })

// EXPLANATION of syntax
// when we fetch data through a url/api we get a Promise which is resolved in another promise nd the value of that promise is our result. in the above syntax 'promise' is the promise that promise is resolving in Json() which is the second promise nd its val is our rs thats y we logged it

let promise = fetch("https://api.agify.io?name=alisha");
promise
  .then((response) => {
    console.log(response.status); //tells https status
    console.log(response.ok); //tells whether everything's ok OR not (ex: https status could have been 404 or 500 throwing an err)
    console.log(response.headers); //response headers basically analayse if there is any header in the data u're fetching. similarly there r REQUEST HEADERS too that we give along w our request
    return response.json();
  })
  .then((value) => {
    console.log(value);
  });

//  Now syntax if u want to give a header in ur req

// let promise= fetch(url,{
//     header:{
//         authentication:"token"
//     }
// })
// promise.then((response)=>{
//     return response.json()
// }).then((value)=>{
//     console.log(value)
// })

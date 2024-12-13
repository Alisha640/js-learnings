// SET TIME OUT => is needed when u want to do sth after certain time but ONCE
// setTimeout(function(){
//     alert("hello world!");
// },3000); //func is executed after 3 sec for ONCE
// clearTimeout; //to stop the execution

// let timerId= setTimeout(function(){
//     alert("hello world!");
// },3000); 
// console.log(timerId); //in console it prints the timer id

// const sum=(a,b,c)=>{
//     console.log("sum of a,b,c is", a+b+c);
// }; //this func can be called along w it's parameters in timeout func
// setTimeout(sum,3000,2,2,3); //runs the "sum" func after 3 sec nd gives output 7

// SET INTERVAL => is needed when u want sth to occur after certain period of time but REPEATEDLY. everything is similar like timeout
const showAlert=()=>{
    alert("hello everyone!");
};
// setInterval(showAlert,3000);

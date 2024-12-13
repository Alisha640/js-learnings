//window is the global obj that helps u to control browser window
console.log(window);
// can also write; 
window.console.log(window);
window.console.log('hello');

//DOM is the js obj of html page called document
console.log(document);
console.log(document.body);
// sometimes u would like to change css properties through js 
document.body.style.background="yellow";

//BOM is browser obj model; browser(host environment) helps us to access some additional objtects
// prompt,confirm,alert r the part of BOM 
// alert("Hello World");
// location.href="https://codewithharry.com"; write in console nd see it redirects us to that page

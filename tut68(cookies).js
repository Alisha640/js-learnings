// Cookies: stores data nd the syntax is; key=value;
// helps the web server to identify the user uniquely
// if on any random pg u want to see cookies go to console nd type document.cookie
console.log(document.cookie); //shows nothing as my pg has no cookies
document.cookie = "myname=Alisha640"; //i myself made one cookie
document.cookie = "mysister=Umema2155"; //it doesn't mean i overwrite the previous one it means i jst added this one w the previous one (the concept is diff w cookies)
document.cookie = "myname=Alisha404"; //this will over write the previous myname key that has the val Alisha640

// Now the question is how to add special char in cookies (key nd val) without getting an err
// there's a function for it encodeUri component
let key = prompt("Enter your key:");
let value = prompt("Enter your value:");
// document.cookie = `${key}=${value}`; //it was ok when i didn't use the special char
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);
console.log(decodeURIComponent("%40my_age%23_%3B=%3Dis54")); //i am decoding the cookie i gave in prompt w special char nd the ans is @my_age#_;==is54

// there r cookie options, better study them from the notes (in notes the options r for path nd expire if u want to set u can use them)
// u can not add more than one cookie like this; ex: document.cookie = "mysister=Umema2155"; "yourname=maha543"
// in this case "yourname=maha543" will be considered as an option so only the first one would be added in cookies

// Q#1
// let firstNavEl=document.body.firstElementChild.firstElementChild;
// firstNavEl.style.color="red";

// Q#2; ANSWER: "NO"
// Q#3
let colorChange=document.getElementsByTagName("div")[0].children;
colorChange[0].style.color="green";
colorChange[2].style.color="green";

// Q#4
let allChild=document.getElementById("navbar").children;
Array.from(allChild).forEach((li)=>{
    li.style.backgroundColor="red";
});
// OR 
// allChild[0].style.backgroundColor="cyan"
// allChild[1].style.backgroundColor = "cyan";
// allChild[2].style.backgroundColor = "cyan";
// allChild[3].style.backgroundColor = "cyan";

// Q#5; ANSWER: "NONE"
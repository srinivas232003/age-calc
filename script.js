let d=document.querySelector("#d");
let m=document.querySelector("#m");
let y=document.querySelector("#y");
let b=document.querySelector("button");
let ans=document.querySelector('p')
 a=new Date();
function age(){
  let year=parseInt(y.value)-a.getYear();
  let month=parseInt(m.value)-a.getMonth();
  let days=parseInt(d.value)-a.getDate();
  ans.innerText=`You are ${year}years ${month}months ${days}days old`;
  
  }
b.addEventListener("click",age)

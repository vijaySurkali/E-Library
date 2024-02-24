function signup()
{
    window.location.href="/pages/signuppage/signup.html";
} 

const mehul={
   studentid:210111538, 
   passward:123
} 

const nitish={
    studentid:21011100, 
    passward:"nk.accept"

} 

const yogesh={
    studentid:21011106,
    passward:890
}  
let text=" ";


function login()
{
    let stid=document.getElementById("studentid").value;
   let pass=document.getElementById("pasward").value;
   if(stid==mehul.studentid)
   {
    if(pass==mehul.passward)
    {
        location.href="/pages/homepage/home.html"
    } 
    else{
       text="Wrong Passward";
    }
   }  

   else if(stid==nitish.studentid)
   {  if(pass==nitish.passward)
    {
        location.href="/pages/homepage/home.html"
    } 
    else{
        text="Worng Passard";
    }

   }  

   else if(stid==yogesh.studentid)
   {  if(pass==yogesh.passward)
    {
        location.href="/pages/homepage/home.html"
    } 
    else{
        text="Worng Passard";
    }

   } 

   else{
    text="Wrong UserID Passward";
   } 

   document.getElementById("notify").innerHTML=text;

} 



var input = document.getElementById("pasward");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      login();
    }
  }); 
  var input = document.getElementById("studentid");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      login();
    }
  });


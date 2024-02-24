var i=0,j=0;
function dropdown()
{   let nav=document.getElementById("nav");
 
    if(i==0)
   { 
    document.getElementById("navbar").style.height="0";
    nav.style.display="none";

    i=1;
   }
    
    else
    { 
        nav.style.display="inline-block";

        document.getElementById("navbar").style.height="14rem";

        i=0;

    }
} 


function btne()
{
    let items=document.querySelector('.menuitems'); 
    let menubar=document.querySelector('.menubar'); 
if(j==0) { 
    menubar.style.height="fit-content";
    menubar.style.width="fit-content"; 

    items.style.display="none"; 

    j=1;
}
else{ 
    menubar.style.height="95vh";
    menubar.style.width="25%";
items.style.display="contents"; 
j=0;
}

}  
 

function changelinks(){
    const links=document.querySelectorAll('li a'); 
    console.log(links); 
    console.log(links[6]);
    links[5].setAttribute('href','/pages/homepage/home.html');
}   

window.onload=function()
{ 
const b=window.innerWidth; 
if(b<=1029)
{
    changelinks();
}
 
} 

// console.log(`${a} ${b}`);  

// const a=window.onload
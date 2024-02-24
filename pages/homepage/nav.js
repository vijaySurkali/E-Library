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

        document.getElementById("navbar").style.height="17rem";

        i=0;

    }
} 

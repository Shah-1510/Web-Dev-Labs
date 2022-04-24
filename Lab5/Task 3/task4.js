var num=document.getElementById("num")
var generate=document.getElementById("btn")
var print=document.getElementsByClassName("seqbox")[0]
generate.addEventListener("click",function(){
    if(num.value=="")
    {
        print.remove();
        window.location.reload()
    }
     if(num.value.length>0)
    {     
        if(num.value=='E' || num.value=='e')
        {
            for(var i=0;i<=30;i=i+2)
            {    
                var n = document.createElement("div");
                n.setAttribute('ID', 'arrange');            
                n.textContent =`${i}`
                print.appendChild(n);
            } 
        }       
       else  if(num.value=='O' || num.value=='o')
        {
            for(var i=1;i<=30;i=i+2)
            {    
                var o = document.createElement("div");
                o.setAttribute('ID', 'arrange');               
                o.textContent =`${i}`
                print.appendChild(o);
            } 
        }      
    }
    num.value="";
})
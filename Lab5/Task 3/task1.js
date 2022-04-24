var num=document.getElementById("table")
var generate=document.getElementById("btn")
var print=document.getElementsByClassName("table")[0]
generate.addEventListener("click",function(){
    if(num.value=="")
    {
        print.remove();
        window.location.reload()
    }
    else if(num.value>0)
    {        
        for(var i=1;i<=10;i++)
        {    
            var t = document.createElement("div");
            t.setAttribute('ID', 'arrange');
            t.textContent =`${num.value} * ${i} = ${num.value*i}`
            print.appendChild(t);
        }
        
    }
    num.value="";
})
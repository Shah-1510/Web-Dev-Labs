var base=document.getElementById("base")
var pow=document.getElementById("power")
var btn=document.getElementById("btn")
var result=document.getElementById("result")
btn.addEventListener("click",function(){
    if(base.value>0 && pow.value>0)
    {
        result.value=(Math.pow(base.value,pow.value));
        base.value="";
        pow.value="";
    }
   else if(base.value=='' || pow.value=="")
    {
        base.value="";
        pow.value="";
        result.value="";
    }
})
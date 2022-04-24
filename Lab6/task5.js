var age=document.getElementById('input');
var amount=document.getElementById('input2');
function consuming(){
    if(age.value.length>0 && amount.value.length>0)
        {
            consumed(age.value,amount.value);
        }
        age.value='';
        amount.value='';
}
var consumed=(age,amount)=>
    {        
           var mxage=60;
           var consume=mxage*12*30*amount;
           var current=age*12*30*amount;
           alert(`Current Consumed Amount is ${current} You  need ${consume-current} to last you until the ripe old age of ${mxage}`)       
}
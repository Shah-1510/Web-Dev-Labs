var check=document.getElementById('input');
function cases()
{
    if(check.value.length>0)
    {
        switch (check.value) {
            case "1":
             alert("I am Using Chrome Browser")
              break;
            case "2":
                alert("I am Using Opera Browser")
              break;
            case "3":
                alert("I am Using Mozilla Firefox Browser")
              break;
            case "4":
                alert("I am Using Microsoft Edge Browser")
              break;
            default:
            alert("Enter Value Between 1 to 4")
            break;
          }
        check.value='';
    }   
}
var options=prompt('Alarm is Ringing!! Press S to Snooze and D to Dismiss !');
if(options=='S'||options=='s')
{while(options=='S'||options=='s')
{options=prompt('Alarm is Ringing!! Press S to Snooze and D to Dismiss !');}
alert('Wrong Input');}
else if(options=='D'||options=='d')
{alert('Good Morning')}
else{alert('Wrong Input');}

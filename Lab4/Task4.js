document.write("<b>1)Object </b><br>");
var details = {
    username: "Shoaib",
    password: "Shah10"
  };
document.writeln("<br><b>Username Object:</b>"+details.username +'<br>')
document.writeln("<b>Password Object:</b>"+details.password +'<br>')
document.write("<br><b>2)Array</b> <br>"); 
var database=[details]

document.writeln("<br>"+ database[0].username +"<br>")
document.writeln( database[0].password +"<br>")

var newsfeed=[{
    username:'Shoaib',
    timeline:'Active'
},
{
    username:'Humza',
    timeline:'Not Active'
},
{
    username:'Farooq',
    timeline:'Not Active'
}]
document.write("<br><b>3)Array of an Object</b> <br><br>");
document.write("Username:"+newsfeed[0].username +"<br>"+ "TimeLine:"+newsfeed[0].timeline+"<br> <br>")
document.write("Username:"+newsfeed[1].username +"<br>"+ "TimeLine:"+newsfeed[1].timeline+"<br><br> ")
document.write("Username:"+newsfeed[2].username +"<br>"+ "TimeLine:"+newsfeed[2].timeline+"<br><br>")

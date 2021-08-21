var janeScore = document.getElementById("myBtn");
janeScore.addEventListener("click", jane);
var markScore = document.getElementById("Btn");
markScore.addEventListener("click", mark);

function jane() 
   {
   text = "Score is 52";
   document.getElementById("jane").innerHTML = text;
   }
   
function mark()
   {
   text = "Score is 41";
   document.getElementById("mark").innerHTML = text;
   }
 

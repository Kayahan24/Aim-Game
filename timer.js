var seconds=30;
var timer;
var puan = document.getElementById("puan");
function myFunction() {
  console.log(sayac);
  if(seconds < 30) { // I want it to say 1:00, not 60
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds >0 ) { // so it doesn't go to -1
     seconds--;
  } else {
     clearInterval(timer);
     alert("Your score:"+sayac);
  }
}
sayac = 0;
function timerstart() {
  puan.innerHTML=sayac;
  if(!timer) {
    timer = window.setInterval(function() { 
      myFunction();
    }, 1000); // every second
  }
} 

document.getElementById("timer").innerHTML="30"; 

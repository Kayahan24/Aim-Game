
var buton = document.getElementById("buton");
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function btnclick()
{
    sayac++;
    var clicked = getRandomInt(2,6);
    buton.style.height=clicked+"rem";
    buton.style.width=clicked+"rem";
    buton.style.left=getRandomInt(3,92)+"%";
    buton.style.top=getRandomInt(15,85)+"%";
   
}

toggle.onclick = function(){
 toggle.classList.toggle('active');
 body.classList.toggle('active');
}
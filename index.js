var randomNumber1 = Math.floor(Math.random()*6)+1;
 var randomdice = "images/dice"+ randomNumber1 + ".png"
const mian = document.querySelectorAll('img')[0].setAttribute('src', randomdice);

var randomNumber2 = Math.floor(Math.random()*6)+1;
 var randomdic = "images/dice"+ randomNumber2 + ".png"
const main = document.querySelectorAll('img')[1].setAttribute('src', randomdic);

if (randomNumber1>randomNumber2) {
    document.querySelector('h1').innerHTML="Player one win";
} 
else if (randomNumber1<randomNumber2)  {
    document.querySelector('h1').innerHTML="Player two win";
} 
else {
    document.querySelector('h1').innerHTML="Draw";
}
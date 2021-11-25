var randomNum1= Math.floor(Math.random()*6)+1;
var randomNum2= Math.floor(Math.random()*6)+1;
var randomDice1= "dice"+randomNum1+".png";
var randomDice2= "dice"+randomNum2+".png";
var randomImg1="images/"+ randomDice1;
var randomImg2="images/"+ randomDice2;
document.querySelector(".img1").setAttribute("src",randomImg1);
document.querySelector(".img2").setAttribute("src",randomImg2);
if(randomNum1>randomNum2)
 document.querySelector('h1').innerHTML="Player 1 WON";
else if(randomNum2>randomNum1)
 document.querySelector('h1').innerHTML="Player 2 WON";
else
 document.querySelector('h1').innerHTML="Draw";

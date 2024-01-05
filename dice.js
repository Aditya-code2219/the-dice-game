
var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomimagedice = "dice"+ randomnumber1 + ".png";
var randomdice = "./images/" + randomimagedice;

var radnomdices1= document.querySelector(".img1");

radnomdices1.setAttribute("src", randomdice);
// for second dice 
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimagedice2 = "./images/dice" + randomnumber2 + ".png"

var randomdices2 = document.querySelector(".img2");

randomdices2.setAttribute("src", randomimagedice2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "🚩PLAYER 1 WINS!!!";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML = "🚩PLAYER 2 WINS!!!";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!!";
}
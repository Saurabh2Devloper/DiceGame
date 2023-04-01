
var randomNumber1=Math.floor(Math.random()*6)+1;
// console.log(randomNumber1)
var randomimg="dice"+randomNumber1+".png";
var randimdsrc="images/"+randomimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimdsrc);



var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimg2="dice"+randomNumber2+".png";
var randimdsrc2="images/"+randomimg2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randimdsrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 WIns!"
}else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!!"

    
}else{
    document.querySelector("h1").innerHTML="ITS A TIE!!"
}
document.querySelector("button").onclick=function (){
    var randomNumber1=Math.floor(Math.random()*6)+1;
// console.log(randomNumber1)
var randomimg="dice"+randomNumber1+".png";
var randimdsrc="images/"+randomimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimdsrc);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimg2="dice"+randomNumber2+".png";
var randimdsrc2="images/"+randomimg2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randimdsrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!"
}else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!!"

    
}else{
    document.querySelector("h1").innerHTML="ITS A TIE!!"
}
}
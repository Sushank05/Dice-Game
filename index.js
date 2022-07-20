var randomImgNumber = Math.floor(Math.random()*6)+1;
var randomImgAdd="./images/dice"+randomImgNumber+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImgAdd);

var randomImgNumber2=Math.floor(Math.random()*6)+1;
var randomImgAdd2="./images/dice"+randomImgNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgAdd2);


if(randomImgNumber>randomImgNumber2){
  document.querySelector("h1").innerHTML="Player 1 Won ";
}
else if(randomImgNumber<randomImgNumber2){
  document.querySelector("h1").innerHTML="Player 2 Won ";
}
else {
    document.querySelector("h1").innerHTML="Draw ";
}

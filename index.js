var randomNumber1 = Math.floor(1+Math.random()*6);
var randomNumber2 = Math.floor(1+Math.random()*6);
document.querySelectorAll("img")[0].setAttribute('src', 'images/dice'+randomNumber1+'.png');
document.querySelectorAll("img")[1].setAttribute('src', 'images/dice'+randomNumber2+'.png');
if (randomNumber1 > randomNumber2) {
    var output = 'Player 1 Wins' 
}
else if (randomNumber2 > randomNumber1) {
    var output = 'Player 2 Wins'
}
else {
    var output = "It's a tie"
}
document.querySelectorAll("h1")[0].innerHTML = output
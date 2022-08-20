var valueDice1 = Math.floor((Math.random() * 6)) + 1;
var valueDice2 = Math.floor((Math.random() * 6)) + 1;

// console.log(valueDice1);
// console.log(valueDice2);

// document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png");
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice" + valueDice1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice" + valueDice2+".png");

if(valueDice1 == valueDice2) {
  console.log("aa")
  document.querySelector(".container h1").textContent = "Tie";
}
else if(valueDice1 > valueDice2) {
  console.log("bb")
    document.querySelector(".container h1").textContent = "Player1 Wins";
}
else {
  console.log("cc")
  document.querySelector(".container h1").textContent = "Player2 Wins";
}

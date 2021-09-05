

var userResult = document.getElementById("userResult");
var userScore = document.getElementById("userScore");

var usersget = localStorage.getItem("userScore")


userScore.innerHTML = "your score is "+usersget;
console.log(usersget)
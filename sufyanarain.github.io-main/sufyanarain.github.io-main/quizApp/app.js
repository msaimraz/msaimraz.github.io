
// let ans1 = "Karachi";
// let asq1 = document.getElementsByClassName("asq1").checked = true;

let qs1 = document.getElementsByClassName("qs1");
let qs2 = document.getElementsByClassName("qs2");
let qs3 = document.getElementsByClassName("qs3");
let qs4 = document.getElementsByClassName("qs4");
let qs5 = document.getElementsByClassName("qs5");


let result = 0;

let subBtn = document.getElementById("subBtn");
let resultDom = document.getElementById("result");


subBtn.onclick = function(){

    if(qs1[3].checked){
        result += 10;
    }

    if(qs2[1].checked){
        result += 10;
    }

    if(qs3[2].checked){
        result += 10;
    }

    if(qs4[0].checked){
        result += 10;
    }

    if(qs5[3].checked){
        result += 10;
    }
resultDom.innerHTML = "You got " + result + " marks";

}
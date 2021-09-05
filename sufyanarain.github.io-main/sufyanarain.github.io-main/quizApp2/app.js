// var userEmail = prompt("enter email")
// var userPass = prompt("enter password")

// var sufyan = {
//     email:"sufyan822@gmail.com",
//     passwoed: "saylani12"
// }
// sufyan.rollnum = 2132332;
// console.log(sufyan)

var qst = [
    {
        q: "Q1 : What is the capital of Pakistan",
        op1: "Karachi",
        op2: "Lahore",
        op3: "Islamabad",
        op4: "Quetta",

        ans: "Islamabad",

    },
    {
        q: "Q2 : LCD Stands for",
        op1: "Liquid circle fisplay",
        op2: "liquid crystle display",
        op3: "light crystle display",
        op4: "light crispy display",

        ans: "liquid crystle display",

    },
    {
        q: "Q3 : PC stands for",
        op1: "personal cell",
        op2: "popular computer",
        op3: "personal computer",
        op4: "personal chip",

        ans: "personal computer",

    },
    {
        q: "Q4 : The computer uses the .......... number system to store data and perform calculations.",
        op1: "Binary",
        op2: "Octal",
        op3: "Decimal",
        op4: "Hexadecimal",

        ans: "Binary",

    },
]

var userWelcome = document.getElementById("userWelcome");
var userget = localStorage.getItem("userquiz")
userWelcome.innerHTML = "welcome "+userget;


var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var qUl = document.getElementById("qUl");
var next = document.getElementById("next");
var liOptions = document.getElementsByClassName("liOptions")

var counter = 0;
var liData = ""
var score = 0;



function qDisplay() {

    qUl.innerHTML = `<p id="question">${qst[counter].q}</p><li id="option1"><input checked  type="radio" name="option" class="liOptions" id="op1"><label for="op1">${qst[counter].op1}</label></li><li id="option2"><input type="radio" name="option" class="liOptions" id="op2"><label for="op2">${qst[counter].op2}</label></li><li id="option3"><input type="radio" name="option" class="liOptions" id="op3"><label for="op3">${qst[counter].op3}</label></li><li id="option4"><input type="radio" name="option" class="liOptions" id="op4"><label for="op4">${qst[counter].op4}</label></li>`

    // console.log(liOptions[0].labels[0].innerText)

}

next.addEventListener('click', function () {
    
    
    for (var i = 0; i < qst.length; i++) {
        if (liOptions[i].checked) {
            liData = liOptions[i].labels[0].innerText
        }
        
    }
    
    
    if (liData == qst[counter].ans) {
        console.log("correct")
        score += 10;
        localStorage.setItem("userScore",score)
    } else {
        // console.log("wrong")
        
    }
    if(counter>2){
        window.location = "./result.html";
    
    }else{
            console.log(counter)



    // console.log(qst[counter].ans)
    console.log(score)

    counter += 1;
    qDisplay()
        // console.log("hhd")
    }
    


})

    
    





































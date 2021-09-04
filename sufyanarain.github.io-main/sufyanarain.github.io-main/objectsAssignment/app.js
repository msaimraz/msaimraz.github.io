// // Q1
// var itemsArray = [
//     { name: "juice", price: "50", quantity: "3" },
//     { name: "cookie", price: "30", quantity: "9" },
//     { name: "shirt", price: "880", quantity: "1" },
//     { name: "pen", price: "100", quantity: "2" }
// ];

// var total = 0;
// for (var i = 0; i < itemsArray.length; i++) {
//     var result = `Total price of ${itemsArray[i].name} is : ${itemsArray[i].price * itemsArray[i].quantity}`
//     console.log(result)
//     total += (+itemsArray[i].price) * (itemsArray[i].quantity)
// }
// console.log(`Total price of all items: ${total}`)



// // Q2
// var userObj = {
//     name: "sufyan",
//     email: "sufyan822@gmial.com",
//     password: "11223344",
//     age: 26,
//     gender: "male",
//     city: "karachi",
//     country: "pakistan"
// }

// var findProb = prompt("fine a property in object");
// if (userObj.hasOwnProperty(findProb)) {
//     console.log(`${findProb} propert found in object`)
// } else {
//     console.log(`${findProb} property not found in object`)

// }





// // Q3
// function Userdata(userName,email,password){
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
// }

// var InputUser = document.getElementById("InputUser");
// var InputEmail = document.getElementById("InputEmail");
// var InputPassword1 = document.getElementById("InputPassword1");
// var signUp = document.getElementById("signUp");

// var objArr = []

// signUp.addEventListener('click',function(){
//     var userdata1 = new Userdata(InputUser.value,InputEmail.value,InputPassword1.value)
//     objArr.push(userdata1)
//     console.log(objArr);
// })





// Q4
function ChkPopulation(name, gender, address, qualification, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.qualification = qualification;
    this.profession = profession;

}

var InputUser = document.getElementById("InputUser");
var chkGender = document.getElementsByClassName("chkGender");
var inputAddress = document.getElementById("inputAddress");
var qualiSelect = document.getElementById("qualiSelect");
var profeSelect = document.getElementById("profeSelect");
var submit = document.getElementById("submit");
var tableBody = document.getElementById("tableBody");

var gend = "";

submit.addEventListener('click', function () {
    for (var i = 0; i < chkGender.length; i++) {
        if (chkGender[i].checked) {
            gend = chkGender[i].value;

        }
    }

    var qualiResult = qualiSelect.options[qualiSelect.selectedIndex].text;
    var professResult = profeSelect.options[profeSelect.selectedIndex].text;



    var userInputData = new ChkPopulation(InputUser.value, gend, inputAddress.value, qualiResult, professResult);

var getFromLocal = localStorage.getItem("userData");
// getFromLocal = JSON.parse(getFromLocal)
if(getFromLocal === null){

    var userObjj = []
}else{
    var getArryLocal = localStorage.getItem("userData");
    userObjj = JSON.parse(getFromLocal)
}

    userObjj.push(userInputData)

    localStorage.setItem('userData', JSON.stringify(userObjj))
    // *** reseting the valu after submitted *******
    InputUser.value = ""
    inputAddress.value = ""
    qualiSelect.selectedIndex = 0;
    profeSelect.selectedIndex = 0;

    // var getFromLocal = JSON.parse(localStorage.getItem('userobject'))

    // console.log(getFromLocal)
    displayData()


})




function displayData() {
    var getFromLocal = localStorage.getItem('userData');
    getFromLocal = JSON.parse(getFromLocal)
    console.log(getFromLocal)
    tableBody.innerHTML = ""
    for (var i = 0; i < getFromLocal.length; i++) {
        tableBody.innerHTML += `<tr>
    <th scope="row">${i + 1}</th>
    <td>${getFromLocal[i].name}</td>
    <td>${getFromLocal[i].address}</td>
    <td>${getFromLocal[i].gender}</td>
    <td>${getFromLocal[i].qualification}</td>
    <td>${getFromLocal[i].profession}</td>
    </tr>`
}
}

// <td><button onclick="deleteFunc(this)" class="btn-primary">Delete</button></td>
// function deleteFunc(btn){
//     btn.parentNode.parentNode.remove();
// }



displayData()


























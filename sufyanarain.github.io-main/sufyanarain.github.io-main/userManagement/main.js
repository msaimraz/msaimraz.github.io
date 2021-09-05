
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let welcomeUser = document.getElementById("welcomeUser");
let logOut = document.getElementById("logOut");
let userLogedIn = document.getElementById("userLogedIn");




// var loginUsrObj = loca
var loginUsrObj = localStorage.getItem("loginObjD");
loginUsrObj = JSON.parse(loginUsrObj)


// window.closed = localStorage.removeItem('loginObjD')

// if(window.closed){

// }


if (!loginUsrObj) {
    swal({
        title: "Not Allowed",
        text: "You are not logged in, please login first",
        icon: "warning",
        button: "OK",
    })
        .then((value) => {
            window.location.href = "index.html"

        });
    // document.body.innerHTML = `you are not logged in, please go to login page`

} else {
    // userName.innerHTML = `Name : ${loginUsrObj.userName}`
    // userEmail.innerHTML = `Email : ${loginUsrObj.email}`
    welcomeUser.innerHTML = `Welcome : ${loginUsrObj.userName}`;
    userLogedIn.innerHTML = `You are now logged in`


    // getting data from local storage
    var userData = localStorage.getItem("userLocal1");
    if (userData === null) {
        var userData = []

    } else {

        userData = JSON.parse(userData)
    }

    let userTable = document.getElementById("userTable");

    for (var i = 0; i < userData.length; i++) {
        userTable.innerHTML += `
         <tr>
            <th scope="row">${i+1}</th>
            <td>${userData[i].userName}</td>
            <td>${userData[i].email}</td>
         </tr>
    `
    }



    logOut.addEventListener('click', function () {
        localStorage.removeItem('loginObjD')
        window.location.href = "index.html"
        console.log(loginUsrObj)
    })




}






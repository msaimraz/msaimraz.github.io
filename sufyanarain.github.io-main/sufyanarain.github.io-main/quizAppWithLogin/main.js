
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var welcomeUser = document.getElementById("welcomeUser");
var logOut = document.getElementById("logOut");




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
    userName.innerHTML = `Name : ${loginUsrObj.userName}`
    userEmail.innerHTML = `Email : ${loginUsrObj.email}`
    welcomeUser.innerHTML = `Welcome : ${loginUsrObj.userName}`

    logOut.addEventListener('click', function () {
        localStorage.removeItem('loginObjD')
        window.location.href = "index.html"
        console.log(loginUsrObj)
    })




}






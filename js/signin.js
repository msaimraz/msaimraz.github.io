let email_In = document.getElementById("email_In");
let pass_In = document.getElementById("pass_In");
let login = document.getElementById("login");
let error = document.getElementById("error");
let userObjLogin;
var userLogin = false;


// getting data from local storage
let userObj = localStorage.getItem("userObjLocal");
userObj = JSON.parse(userObj)
console.log(userObj)


login.addEventListener('click', () => {

    for (let i = 0; i < userObj.length; i++) {
        if (userObj[i].email === email_In.value && userObj[i].password === pass_In.value) {
            userLogin = true;
            userObjLogin = userObj[i]
        }

    }
    userObjLogin = JSON.stringify(userObjLogin)
    localStorage.setItem("userObjLoginLocal", userObjLogin)
    console.log(userObjLogin, userLogin)
    if (userLogin) {
        window.location = "login.html"

    }

})

//! Push Data Using Array 
//! var person = [signupfullname, signupemailid, signuppassword]
// Show Signup Password
function showsignuppassword() {
    var signuppassword = document.getElementById("signuppassword");
    if (signuppassword.type === "password") {
        signuppassword.type = "text";
    } else {
        signuppassword.type = "password";
    }
}

// Show Login Password
function showloginpassword() {
    var loginpassword = document.getElementById("loginpassword")
    if (loginpassword.type === "password") {
        loginpassword.type = "text";
    } else {
        loginpassword.type = "password";
    }
}



// For Signup and save Data in localStorage
function signup() {
    let usernameforsignup = JSON.parse(localStorage.getItem("persons"));

    let signupusername = document.getElementById('signupusername').value;
    let signupfullname = document.getElementById('signupfullname').value;
    let signupemailid = document.getElementById('signupemailid').value;
    let signuppassword = document.getElementById('signuppassword').value;

    let alreadyusername = document.getElementById('alreadyusername');
    let spaceusername = document.getElementById('spaceusername');

    // Push Data Usin Object
    var person = {
        username: signupusername,
        name: signupfullname,
        email: signupemailid,
        password: signuppassword,
    };
    if (signupusername.indexOf(" ") > -1) {
        spaceusername.style.display = "block";
        setTimeout(function () {
            spaceusername.style.display = "none";
        }, 4000);
    } else {
        if (!usernameforsignup) {
            //! Validation for empty value and email
            if ((signupusername.length && signupfullname.length && signupemailid.length && signuppassword.length) > 0 && ((signupemailid.indexOf("@") + 1) !== signupemailid.length) && signupemailid.indexOf("@") > -1) {
                var signupdata = JSON.parse(localStorage.getItem("persons")) || [];
                signupdata.push(person);
                localStorage.setItem("persons", JSON.stringify(signupdata));
                // window.location = "./login.html";

            } else {
                swal("Please Fill all the Field correctly");
            }
            console.log("no");
        } else {
            let found = false;
            // Loop for searching data in Array
            for (let i = 0; i <= usernameforsignup.length - 1; i++) {
                if (usernameforsignup[i].username == signupusername) {
                    found = true;
                    alreadyusername.style.display = "block";
                    setTimeout(function () {
                        alreadyusername.style.display = "none";
                    }, 4000);
                }
                console.log(usernameforsignup[i].username);
            }
            if (found == false) {
                //! Validation for empty value and email
                if ((signupusername.length && signupfullname.length && signupemailid.length && signuppassword.length) > 0 && ((signupemailid.indexOf("@") + 1) !== signupemailid.length) && signupemailid.indexOf("@") > -1) {

                    var signupdata = JSON.parse(localStorage.getItem("persons")) || [];
                    signupdata.push(person);
                    localStorage.setItem("persons", JSON.stringify(signupdata));
                    window.location = "./login.html";

                } else {
                    swal("Please Fill all the form correctly");
                }
            }
        }
    }
    // testing
    // console.log(signupemailid.indexOf("@") + 1);
    // console.log(signupemailid.length);

    // console.log(usernameforsignup[0].password);
}


// Retrive Data From localStorage and Match email and password.
// if email and password matched user go on the team page 
function login() {

    let loginnameoremail = document.getElementById('loginnameoremail').value;
    let loginpassword = document.getElementById('loginpassword').value;

    const dataforlogin = JSON.parse(localStorage.getItem("persons"))
    // console.log(dataforlogin[0].password);
    let found = false;
    // Loop for searching data in Array
    for (let i = 0; i <= dataforlogin.length - 1; i++) {
        if ((dataforlogin[i].email == loginnameoremail || dataforlogin[i].username == loginnameoremail) && dataforlogin[i].password == loginpassword) {
            found = true;
            console.log("Login email and password matched");
            window.location.href = "./teams.html"
        }
    }
    if (found == false) {
        swal("Incorrect Email or Password");
    }
    // var aaa = JSON.parse(localStorage.getItem("persons"))
    // console.log(aaa[0].email)  
}

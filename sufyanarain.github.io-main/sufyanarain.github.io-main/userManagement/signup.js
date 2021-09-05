// getting data in variables
var InputUser = document.getElementById("InputUser");
var InputEmail = document.getElementById("InputEmail");
var InputPassword1 = document.getElementById("InputPassword1");
var InputPassword2 = document.getElementById("InputPassword2");
var signUp = document.getElementById("signUp");
var alertDiv = document.getElementById("alertDiv");
console.log(alertDiv)

// created a constructed function for getting user data
function TakeUserData(userName, email, password1) {
    this.userName = userName;
    this.email = email;
    this.password1 = password1;

}


// added event listenr on signup button
signUp.addEventListener('click', function () {
    // created a flag for checking user 
    var userCond = true;

    // form validation

    if (InputUser.value === "") {
        InputUser.style.borderColor = "red";
        userCond = false;
        // console.log(userCond)
    }
    else {
        InputUser.style.borderColor = "#ccc";
    }

    if (InputEmail.value === "") {
        InputEmail.style.borderColor = "red";
        userCond = false;
        // console.log(userCond)
    }
    else {
        InputEmail.style.borderColor = "#ccc";
    }
    if (InputPassword1.value === "") {
        InputPassword1.style.borderColor = "red";
        userCond = false;
        // console.log(userCond)
    }
    else {
        InputPassword1.style.borderColor = "#ccc";
    }
    if (InputPassword2.value === "") {
        InputPassword2.style.borderColor = "red";
        userCond = false;
        // console.log(userCond)
    }
    else {
        InputPassword2.style.borderColor = "#ccc";
    }

    // email validation
    var emailRgex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

    if (emailRgex.test(InputEmail.value)) {
        InputEmail.style.borderColor = "#ccc";

    } else {
        InputEmail.style.borderColor = "red";
        userCond = false;
        // console.log(userCond)

    }


    // password validation
    var passwrodRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,16}$/;

    if (passwrodRegex.test(InputPassword1.value)) {
        InputPassword1.style.borderColor = "#ccc";
        InputPassword2.style.borderColor = "#ccc";

    } else {
        InputPassword1.style.borderColor = "red";
        InputPassword2.style.borderColor = "red";
        userCond = false;
        // console.log(userCond)
    }

    if (InputPassword1.value !== InputPassword2.value) {
        InputPassword1.style.borderColor = "red";
        InputPassword2.style.borderColor = "red";
        userCond = false;
        // console.log(userCond)

    } else {
        // InputPassword1.style.borderColor = "#ccc";
        // InputPassword2.style.borderColor = "#ccc";

    }

    // console.log(userCond)




    // putinng data to constructor object
    if (userCond) {
        user1 = new TakeUserData(InputUser.value, InputEmail.value, InputPassword1.value);

        // made a condition for setting data in local storage
        var getFromLocalS = localStorage.getItem("userLocal1");
        if (getFromLocalS === null) {
            var arr1 = [];

        } else {
            var getArryFromLocal = localStorage.getItem("userLocal1")
            arr1 = JSON.parse(getArryFromLocal);

        }
        // pushing data to array
        arr1.push(user1)

        // pushing data to local storage
        localStorage.setItem("userLocal1", JSON.stringify(arr1))
        
            swal({
                title: "Account Created",
                text: "Your account has been created! please login",
                icon: "success",
                button: "OK",
            })
            .then((value) => {
            window.location.href = "index.html"
    
    });
        // alert("your account has been created. please login");
        // resetting values of user data
        InputUser.value = "";
        InputEmail.value = "";
        InputPassword1.value = "";
        InputPassword2.value = "";

    }else{
        alertDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Failed!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    }

    // var userData = new TakeUserData(InputUser.value, InputEmail.value, InputPassword1.value, InputPassword2.value);

})










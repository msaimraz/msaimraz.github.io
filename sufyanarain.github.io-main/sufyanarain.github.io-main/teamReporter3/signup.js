// // getting data in variables
// var InputUser = document.getElementById("InputUser");
// var InputEmail = document.getElementById("InputEmail");
// var InputPassword1 = document.getElementById("InputPassword1");
// var InputPassword2 = document.getElementById("InputPassword2");
// var signUp = document.getElementById("signUp");
// var alertDiv = document.getElementById("alertDiv");
// // console.log(alertDiv)

// // created a constructed function for getting user data
// function TakeUserData(userName, email, password1) {
//     this.userName = userName;
//     this.email = email;
//     this.password1 = password1;
//     // this.like = function(user){
//     //     console.log(`${this.userName} liked the picture`)
//     }




// // TakeUserData.prototype.like = ()=>{
// //     console.log("like")
// // }
// // let newUser = new TakeUserData("sufi","gmail","passs")
// // newUser.like()
// // console.log(newUser)
// // localStorage.setItem("lData",JSON.stringify(newUser))

// // let NewLdata = localStorage.getItem("lData");
// // NewLdata = JSON.parse(NewLdata)
// // console.log(NewLdata)
// // NewLdata.like()


// // added event listenr on signup button
// signUp.addEventListener('click', function () {
//     // created a flag for checking user 
//     var userCond = true;

//     // form validation

//     if (InputUser.value === "") {
//         InputUser.style.borderColor = "red";
//         userCond = false;
//         // console.log(userCond)
//     }
//     else {
//         InputUser.style.borderColor = "#ccc";
//     }

//     if (InputEmail.value === "") {
//         InputEmail.style.borderColor = "red";
//         userCond = false;
//         // console.log(userCond)
//     }
//     else {
//         InputEmail.style.borderColor = "#ccc";
//     }
//     if (InputPassword1.value === "") {
//         InputPassword1.style.borderColor = "red";
//         userCond = false;
//         // console.log(userCond)
//     }
//     else {
//         InputPassword1.style.borderColor = "#ccc";
//     }
//     if (InputPassword2.value === "") {
//         InputPassword2.style.borderColor = "red";
//         userCond = false;
//         // console.log(userCond)
//     }
//     else {
//         InputPassword2.style.borderColor = "#ccc";
//     }

//     // email validation
//     var emailRgex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

//     if (emailRgex.test(InputEmail.value)) {
//         InputEmail.style.borderColor = "#ccc";

//     } else {
//         InputEmail.style.borderColor = "red";
//         userCond = false;
//         // console.log(userCond)

//     }


//     // password validation
//     var passwrodRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,16}$/;

//     if (passwrodRegex.test(InputPassword1.value)) {
//         InputPassword1.style.borderColor = "#ccc";
//         InputPassword2.style.borderColor = "#ccc";

//     } else {
//         InputPassword1.style.borderColor = "red";
//         InputPassword2.style.borderColor = "red";
//         userCond = false;
//         // console.log(userCond)
//     }

//     if (InputPassword1.value !== InputPassword2.value) {
//         InputPassword1.style.borderColor = "red";
//         InputPassword2.style.borderColor = "red";
//         userCond = false;
//         // console.log(userCond)

//     } else {
//         // InputPassword1.style.borderColor = "#ccc";
//         // InputPassword2.style.borderColor = "#ccc";

//     }

//     // console.log(userCond)




//     // putinng data to constructor object
//     if (userCond) {
//         user1 = new TakeUserData(InputUser.value, InputEmail.value, InputPassword1.value);

//         // made a condition for setting data in local storage
//         var getFromLocalS = localStorage.getItem("userLocal1");
//         if (getFromLocalS === null) {
//             var arr1 = [];

//         } else {
//             var getArryFromLocal = localStorage.getItem("userLocal1")
//             arr1 = JSON.parse(getArryFromLocal);

//         }
//         // pushing data to array
//         arr1.push(user1)

//         // pushing data to local storage
//         localStorage.setItem("userLocal1", JSON.stringify(arr1))
//         // console.log(localStorage.getItem("userLocal"))

//             // swal({
//             //     title: "Account Created",
//             //     text: "Your account has been created! please login",
//             //     icon: "success",
//             //     button: "OK",
//             // })
//             // .then((value) => {
//             window.location.href = "index.html"

//     // });
//         // alert("your account has been created. please login");
//         // resetting values of user data
//         InputUser.value = "";
//         InputEmail.value = "";
//         InputPassword1.value = "";
//         InputPassword2.value = "";

//     }else{
//         alertDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
//         <strong>Failed!</strong> You should check in on some of those fields below.
//         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//     </div>`
//     }

//     // var userData = new TakeUserData(InputUser.value, InputEmail.value, InputPassword1.value, InputPassword2.value);

// })

// getting elements from dom 
let InputUser = document.getElementById("InputUser");
let InputEmail = document.getElementById("InputEmail");
let InputPassword1 = document.getElementById("InputPassword1");
let InputPassword2 = document.getElementById("InputPassword2");
let submit = document.getElementById("submit")
let alertDiv = document.getElementById("alertDiv");
let subForm = document.getElementById("subForm");
let LoginHelp = document.getElementById("LoginHelp");




// created class for user's input
class UserObj {
    constructor(name, email, password,userKey,partTeam,createdTeam) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.userKey = userKey;
        this.partTeam = partTeam;
        this.createdTeam = createdTeam;
    }
}





// created class for validating and clearing methods
class AddUserData {
    // validating user's input
    validate() {
        let userCond = true;

        if (InputUser.value === "") {
            InputUser.style.borderColor = "red";
            userCond = false;
        }
        else {
            InputUser.style.borderColor = "#ccc";
        }

        let usersObj = localStorage.getItem("userObjLocal");
        usersObj = JSON.parse(usersObj);

        if (usersObj) {
            for (let i = 0; i < usersObj.length; i++) {
                if (usersObj[i].name === InputUser.value.toUpperCase()) {
                    InputUser.style.borderColor = "red";
                    userCond = false;
                    LoginHelp.innerHTML = `this username is not availabe,try another`
                }
            }
            if(userCond === true){
                InputUser.style.borderColor = "#ccc";
                LoginHelp.innerHTML = ``
            }
        }

        if (InputEmail.value === "") {
            InputEmail.style.borderColor = "red";
            userCond = false;
        }
        else {
            InputEmail.style.borderColor = "#ccc";
        }
        if (InputPassword1.value === "") {
            InputPassword1.style.borderColor = "red";
            userCond = false;
        }
        else {
            InputPassword1.style.borderColor = "#ccc";
        }
        if (InputPassword2.value === "") {
            InputPassword2.style.borderColor = "red";
            userCond = false;
        }
        else {
            InputPassword2.style.borderColor = "#ccc";
        }

        // email validation regex
        var emailRgex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

        if (emailRgex.test(InputEmail.value)) {
            InputEmail.style.borderColor = "#ccc";

        } else {
            InputEmail.style.borderColor = "red";
            userCond = false;

        }

        // validating password
        if (InputPassword1.value !== InputPassword2.value) {
            InputPassword1.style.borderColor = "red";
            InputPassword2.style.borderColor = "red";
            userCond = false;

        } else {
            // InputPassword1.style.borderColor = "#ccc";
            // InputPassword2.style.borderColor = "#ccc";

        }
        // console.log(userCond)    
        return userCond



    }

    // resetting form after submit
    clear() {
        subForm.reset()
    }

    // creating object after validating

    createObj() {
        let data1 = new UserObj(InputUser.value.toUpperCase(), InputEmail.value, InputPassword1.value,new Date().getTime(),[],[]);
        return data1

    }
}

// creating object from adduserdata class
let user = new AddUserData();


// submit event
submit.addEventListener('click', event => {







    user.validate()
    if (user.validate()) {
        user.createObj();
        let userObbb = user.createObj();

        // adding data to local storage
        let getfromLocal = localStorage.getItem("userObjLocal");
        if (getfromLocal === null) {
            var arr = [];
        } else {
            arr = JSON.parse(getfromLocal);
        }

        arr.push(userObbb)
        localStorage.setItem("userObjLocal", JSON.stringify(arr))

        console.log(getfromLocal)
        user.clear()
    } else {
        console.log("user cond false")

    }





    // console.log("submitted")
    event.preventDefault()
})






















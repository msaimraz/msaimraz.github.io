let user_Up = document.getElementById("user_Up");
let email_Up = document.getElementById("email_Up");
let pass1_Up = document.getElementById("pass1_Up");
let pass2_Up = document.getElementById("pass2_Up");
let submit = document.getElementById("submit")
let subForm = document.getElementById("subForm");
let error = document.getElementById("error");

/////////////// user's input class
class UserObj {
    constructor(name, email, password, userKey, partTeam, createdTeam) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.userKey = userKey;
        this.partTeam = partTeam;
        this.createdTeam = createdTeam;
    }
}

class AddUserData {
    validate() {
        let userCond = true;

        if (user_Up.value === "") {
            user_Up.style.borderColor = "red";
            userCond = false;
        }
        else {
            user_Up.style.borderColor = "#ccc";
        }

        let usersObj = localStorage.getItem("userObjLocal");
        usersObj = JSON.parse(usersObj);

        if (usersObj) {
            for (let i = 0; i < usersObj.length; i++) {
                if (usersObj[i].name === user_Up.value.toUpperCase()) {
                    user_Up.style.borderColor = "red";
                    userCond = false;
                    error.innerHTML = `this username is not availabe,try another`
                }
            }
            if (userCond === true) {
                user_Up.style.borderColor = "#ccc";
                error.innerHTML = ``
            }
        }

        if (email_Up.value === "") {
            email_Up.style.borderColor = "red";
            userCond = false;
        }
        else {
            email_Up.style.borderColor = "#ccc";
        }
        if (pass1_Up.value === "") {
            pass1_Up.style.borderColor = "red";
            userCond = false;
        }
        else {
            pass1_Up.style.borderColor = "#ccc";
        }
        if (pass2_Up.value === "") {
            pass2_Up.style.borderColor = "red";
            userCond = false;
        }
        else {
            pass2_Up.style.borderColor = "#ccc";
        }
        var emailRgex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

        if (emailRgex.test(email_Up.value)) {
            email_Up.style.borderColor = "#ccc";

        } else {
            email_Up.style.borderColor = "red";
            userCond = false;
        }

        if (pass1_Up.value !== pass2_Up.value) {
            pass1_Up.style.borderColor = "red";
            pass2_Up.style.borderColor = "red";
            userCond = false;

        } else {
            // pass1_Up.style.borderColor = "#ccc";
            // pass2_Up.style.borderColor = "#ccc";
        }
        // console.log(userCond)    
        return userCond
    }
    clear() {
        subForm.reset()
    }
    createObj() {
        let data1 = new UserObj(user_Up.value.toUpperCase(), email_Up.value, pass1_Up.value, new Date().getTime(), [], []);
        return data1
    }
}
let user = new AddUserData();

submit.addEventListener('click', event => {
    user.validate()
    if (user.validate()) {
        user.createObj();
        let userObbb = user.createObj();
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
console.log(user_Up);
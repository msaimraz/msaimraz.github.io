// var loginEmail1 = document.getElementById("loginEmail1");
// var loginPassword = document.getElementById("loginPassword");
// var login = document.getElementById("login");
// var mainDiv = document.getElementById("mainDiv");
// var LoginHelp = document.getElementById("LoginHelp");


// // getting data from local storage
// console.log(userData)
// var userData = localStorage.getItem("userLocal1");
// if (userData === null) {
//     var userData = []

// } else {

//     userData = JSON.parse(userData)
// }
// // var userData = localStorage.getItem("userLocal1");


// // adding an event listener on login button
// login.addEventListener('click', function () {
//     // making a flag for checking user data
//     var loginUser = false;
//     var loginObj;
//     for (var i = 0; i < userData.length; i++) {
//         // console.log(userData[i].email,userData[i].password1)
//         if (userData[i].email === loginEmail1.value && userData[i].password1 === loginPassword.value && loginEmail1.value != "" && loginPassword.value != "") {
//             loginUser = true;
//             loginObj = userData[i]

//             // setting data in dom after  checking user name and password and set user name nad password from local storage
//             //     mainDiv.innerHTML = `<!DOCTYPE html>
//             //     <html lang="en">

//             //     <head>
//             //         <meta charset="UTF-8">
//             //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             //         <!-- ************** link bootstrap cdn link *************** -->
//             //         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
//             //             integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
//             //         <!-- ********** link style .css ************* -->
//             //         <link rel="stylesheet" href="mainPage.css">
//             //         <title>Document</title>
//             //     </head>

//             //     <body>
//             //         <div class="collapse" id="navbarToggleExternalContent">
//             //             <div class="bg-dark p-4">
//             //                 <h5 id="userName" class="text-white text-center h4">User name : ${userData[i].userName}</h5>
//             //                 <h6 id="userEmail" class="text-white text-center">Email : ${userData[i].email}</h6>
//             //                 <!-- <h6 id="User" class="text-white">Collapsed content</h6> -->
//             //                 <!-- <span class="text-muted">Toggleable via the navbar brand.</span> -->
//             //             </div>
//             //         </div>
//             //         <nav class="navbar navbar-dark bg-dark">
//             //             <div class="container-fluid">
//             //                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
//             //                     data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
//             //                     aria-expanded="false" aria-label="Toggle navigation">
//             //                     <span class="navbar-toggler-icon"></span>
//             //                 </button>

//             //             </div>
//             //         </nav>
//             //         <div class="afterNav">
//             //             <h1>Welcome ${userData[i].userName}</h1>
//             //             <h2>You are now logged in</h2>
//             //             <h2>Press nav button to see more details</h2>
//             //         </div>
//             //         <!-- ********** link bootstrap Js CDN ************* -->
//             //         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
//             //             integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
//             //             crossorigin="anonymous"></script>
//             //         <script src="mainPage.js"></script>
//             //     </body>

//             //     </html>`

//         }
//     }
//     localStorage.setItem("loginObjD", JSON.stringify(loginObj));
//     console.log(loginObj);
//     console.log(loginUser);

//     // added an alert if user name and password dont match
//     if (!loginUser) {
//         LoginHelp.innerHTML = `your account doesn't exist please Sign up`;
//         // swal({
//         //     title: "Not Allowed",
//         //     text: "your account doesn't exist please Sign up",
//         //     icon: "warning",
//         //     // buttons: true,
//         //     dangerMode: true,
//         // })
//     } else {

//         // swal({
//         //     title: "Logged in",
//         //     text: "You are now looged in! Welcome "+loginObj.userName,
//         //     icon: "success",
//         //     // dangerMode: true,
//         //   })
//         //   .then((willDelete) => {

//               window.location.href = "main.html"
//         //   });

//     }


//     // swal({
//     //     title: "Are you sure?",
//     //     text: "Once deleted, you will not be able to recover this imaginary file!",
//     //     icon: "warning",
//     //     buttons: true,
//     //     dangerMode: true,
//     // })
//     //     .then((willDelete) => {
//     //         if (willDelete) {
//     //             swal("Poof! Your imaginary file has been deleted!", {
//     //                 icon: "success",
//     //             });
//     //         } else {
//     //             swal("Your imaginary file is safe!");
//     //         }
//     //     });
// })


let loginEmail1 = document.getElementById("loginEmail1");
let loginPassword = document.getElementById("loginPassword");
let login = document.getElementById("login");
let mainDiv = document.getElementById("mainDiv");
let LoginHelp = document.getElementById("LoginHelp");
let userObjLogin;
var userLogin = false;


// getting data from local storage
let userObj = localStorage.getItem("userObjLocal");
userObj = JSON.parse(userObj)
console.log(userObj)


login.addEventListener('click', () => {
    
    for (let i = 0; i < userObj.length; i++) {
        if (userObj[i].email === loginEmail1.value && userObj[i].password === loginPassword.value) {
            userLogin = true;
            userObjLogin = userObj[i]
        }

    }
    userObjLogin = JSON.stringify(userObjLogin)
    localStorage.setItem("userObjLoginLocal", userObjLogin)
    console.log(userObjLogin,userLogin)
    if (userLogin) {
        window.location = "main.html"
    
    }

})



// 
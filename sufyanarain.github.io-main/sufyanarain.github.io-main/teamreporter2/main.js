// getting elements from dom
let modalBBtn = document.getElementById("modalBBtn");
let createTeam = document.getElementById("createTeam");
let selectCategory = document.getElementById("selectCategory");
let teamName = document.getElementById("teamName");
let memberEmail = document.getElementById("memberEmail");
let teamsDiv = document.getElementById("teamsDiv");
let deleteTeam = document.getElementById("deleteTeam");
let addMoreBtn = document.getElementById("addMoreBtn");
let addMoreInp = document.getElementById("addMoreInp");
let logoutBtn = document.getElementById("logoutBtn");
let membersUl = document.getElementById("membersUl");
let membersModal = document.getElementsByClassName("membersModal");
let team;
let index;
let teamsObj;
let membersArr = "";
let arrForMember = []
// let membersUl = "";
let addMemberIndex;


// getting data from local storage
let getUserFromLocal = localStorage.getItem("userObjLoginLocal");
getUserFromLocal = JSON.parse(getUserFromLocal);
// console.log(getUserFromLocal)
if (getUserFromLocal) {
    console.log(getUserFromLocal)
} else {
    window.location = 'index.html'
}


// getting users object from localstorage
let usersObj = localStorage.getItem("userObjLocal");
usersObj = JSON.parse(usersObj);

function refresh() {
    setTimeout(function () {
        location.reload()
    }, 100);
}
// getting data from user input
let takeUserInput = () => {
    let selectedCategory = selectCategory.options[selectCategory.selectedIndex].value;
    let team = {
        admin: getUserFromLocal.email,
        teamName: teamName.value,
        category: selectedCategory,
        members: arrForMember,
        teamKey: new Date().getTime()
    }
    refresh()

    for (let i = 0; i < usersObj.length; i++) {
        if (usersObj[i].name === getUserFromLocal.name) {
            arr2 = usersObj[i].createdTeam;
        }
    }

    if (arr2 === undefined) {
        var arr = []
    } else {
        var arr = arr2;
    }
    arr.push(team)

    //  setting team object to user's main object and setting  to local storage
    for (let i = 0; i < usersObj.length; i++) {
        if (usersObj[i].name === getUserFromLocal.name) {
            usersObj[i].createdTeam = arr;
        }
    }
    localStorage.setItem("userObjLocal", JSON.stringify(usersObj));
    displayFunc()

}
// function showing useres and add them
let addMemberFunc = (e, eId, d) => {
    arrForMember.push(usersObj[eId].name);


    e.remove()
    console.log(arrForMember);

}

let teamsDecet = (id, e) => {
    localStorage.setItem("userIndex", JSON.stringify(index));
    localStorage.setItem("teamIndex", JSON.stringify(id));
    window.location = "team.html"

    // console.log(id,e)
}

createTeam.addEventListener('click', takeUserInput)
let displayFunc = () => {
    // loop for finding current element and index
    for (let i = 0; i < usersObj.length; i++) {
        if (usersObj[i].name === getUserFromLocal.name) {
            index = i;
            teamsObj = usersObj[i].createdTeam;
        }
    }


    teamsDiv.innerHTML = ""
    // loop for displaying members for adding
    // membersUl = ""
    for (let i = 0; i < usersObj.length; i++) {
        // console.log(usersObj[i])
        membersUl.innerHTML += `
        <li class="membersModal" onclick="addMemberFunc(this,this.id,${i})" id="${i}">${usersObj[i].name}</li>`

        for (let s = 0; s < membersModal.length; s++) {
            if (membersModal[i].innerText == usersObj[index].name) {
                membersModal[i].style.display = "none"
            }
        }


    }


    // console.log(teamsObj)
    for (let i = 0; i < teamsObj.length; i++) {
        membersArr = ""
        for (let w = 0; w < teamsObj[i].members.length; w++) {

            membersArr += `<p>${teamsObj[i].members[w]}</p>`
        }

        // setting data to dom by loop
        teamsDiv.innerHTML += `
        <div id="${i}" onclick="teamsDecet(this.id,this)" class="card-body">
            <h5>Team Name : <span id="teamSpan">${teamsObj[i].teamName}</span></h5>
            <div class="membersDiv container">members : <span>${membersArr}</span></div>
            <button type="button" id="${i}" onclick="teamsDecet(this.id,this)" class="btn btn-dark">
                See more details
            </button>
            
        </div>`
    }

    // resetting the input value
    teamName.value = "";
    // memberEmail.value = "";
    selectCategory.selectedIndex = 0;
    // refresh()
    // window.location = 'main.html'
}
displayFunc()

let deleteTeamFunc = (e) => {
    // getting index from id and deleting from object
    teamsObj.splice(e, 1)
    // setting deleted item from object and setting it to main object
    usersObj[index].createdTeam = teamsObj;
    // setting main object to local storage
    localStorage.setItem("userObjLocal", JSON.stringify(usersObj));

    // updating display function to update elemnts after deleting
    displayFunc()
    refresh()

}

let addMoreFunc = (e) => {
    addMemberIndex = e;

}

// let addNewMemFunc = () => {
//     teamsObj[addMemberIndex].members.push(addMoreInp.value)
//     // setting deleted item from object and setting it to main object
//     usersObj[index].createdTeam = teamsObj;
//     // console.log(usersObj3[addMemberIndex].createdTeam, teamsObj)
//     // setting main object to local storage
//     localStorage.setItem("userObjLocal", JSON.stringify(usersObj));
//     //resetting add member input
//     addMoreInp.value = "";
//     // updating display function to update elemnts after deleting
//     displayFunc()
// }


// logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem("userObjLoginLocal");
    window.location = 'index.html'
})
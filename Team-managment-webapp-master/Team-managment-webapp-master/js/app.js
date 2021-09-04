// FOr Adding Data on local storage
function createteamdatastore() {

    let teamnameinput = document.getElementById('teamnameinput').value;
    let teamcatogeryinput = document.getElementById('teamcatogeryinput').value;
    let memberemailinput = document.getElementById('memberemailinput').value;
    let commaseprate = memberemailinput.split(',')
    // console.log(commaseprate);
    var arr = []
    let person = {
        name: teamnameinput,
        category: teamcatogeryinput,
        email: commaseprate,
        question: arr,
    };

    if ((teamnameinput.length && memberemailinput.length) > 0) {
        if (memberemailinput.indexOf(" ") == -1) {
            if (memberemailinput.charAt(memberemailinput.length - 1) !== ",") {
                if (memberemailinput.indexOf(",,") == -1) {
                    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
                    teamdata.push(person);
                    localStorage.setItem("addteam", JSON.stringify(teamdata));
                    swal("Team Created", "Add more member If you want", "success");
                    createteam();
                    document.getElementById("teamnameinput").value = "";
                    document.getElementById("teamcatogeryinput").value = "";
                    document.getElementById("memberemailinput").value = "";
                } else {
                    swal("More Than one Comma (,) is not Allow")
                }
            } else {
                swal("You Enter (,) in the last, Its Not Allow")
            }
        } else {
            swal("Member Filed Cannot contain Any Empty Space")
        }
    } else {
        swal("Please Input first");
    }
    // if(memberemailinput.length == 0){
    //     console.log("adasd");
    // }
};

// adding member 
// function addmember() {
//     let memberemailinput = document.getElementById('memberemailinput').value;
//     console.log(memberemailinput);
//     document.getElementById('memberemailinput').value = "";
// }

// Create Team 
function createteam() {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let html = '';
    let createElement = document.getElementById('createElement');
    teamdata.forEach((item, index) => {

        if (item.email.length == 1) {
            var email = item.email[0];
        } else if (item.email.length == 0) {
            var email = "Not added yet"
        }
        else {
            var email = item.email[0] + ", " + item.email[1] + " & " + `<b> ${(item.email.length - 2)} </b>` + " Other"
        }
        let teamname = item.name
        let capitializaTeamname = (teamname.charAt(0).toUpperCase() + teamname.slice(1));

        html += `<fieldset class="myteam fw-normal text-start">
                    <div class="myteamcontent">
                        <p class="teamname">${capitializaTeamname}</p>
                        <hr>
                        <i> <p class="member">Members:</p></i>
                        <div class="d-flex justify-content-between">
                            <ul class="teammember" id="memberlist">
                            ${email} 
                            </ul>
                            <div class="text-center">
                            <i onclick="editteam(${index})" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  style="cursor: pointer;" class="bi bi-pencil-square pe-2"></i>
                            <i onclick="settingteam(${index})" class="bi bi-gear-fill" style="cursor: pointer;"></i>
                            </div>
                        </div>
                        
                        <hr>
                        <p class="teammember"><b>Category:</b> ${item.category}</p>
                    </div>
                </fieldset>`
    });

    createElement.innerHTML = html;
}

// editteam
function editteam(index) {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let createteamid = document.getElementById('createteamid');
    let editteambutton = document.getElementById('editteambutton');

    document.getElementById('teamnameinput').value = teamdata[index].name;
    document.getElementById('teamcatogeryinput').value = teamdata[index].category;
    document.getElementById('memberemailinput').value = teamdata[index].email;
    // console.log(teamdata[index].email);
    createteamid.style.display = "none";
    editteambutton.style.display = "block";

    let hiddeninput = document.getElementById('hiddeninput');
    // console.log(index);
    hiddeninput.value = index;
    console.log(index);
}

function saveeditteam() {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];

    let hiddeninput = document.getElementById('hiddeninput').value;
    let teamnameinput = document.getElementById('teamnameinput').value;
    let teamcatogeryinput = document.getElementById('teamcatogeryinput').value;
    let memberemailinput = document.getElementById('memberemailinput').value;
    let commaseprate = memberemailinput.split(',');
    
    var arr = teamdata[hiddeninput].question;
    let person = {
        name: teamnameinput,
        category: teamcatogeryinput,
        email: commaseprate,
        question: arr,
    };

    if ((teamnameinput.length && memberemailinput.length) > 0) {
        if (memberemailinput.indexOf(" ") == -1) {
            if (memberemailinput.charAt(memberemailinput.length - 1) !== ",") {
                if (memberemailinput.indexOf(",,") == -1) {
                    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
                    teamdata[hiddeninput] = person;
                    localStorage.setItem("addteam", JSON.stringify(teamdata));
                } else {
                    swal("More Than one Comma (,) is not Allow")
                }
            } else {
                swal("You Enter (,) in the last, Its Not Allow")
            }
        } else {
            swal("Member Filed Cannot contain Any Empty Space")
        }
    } else {
        swal("Empty Field Not Allowed")
    }
    createteam();
}

// Deleteall
function deleteall() {
    // clear localStorage
    localStorage.removeItem('addteam');
    let createElement = document.getElementById('createElement');
    createElement.innerHTML = "";
}

function showinputmodalbox() {
    let createteamid = document.getElementById('createteamid');
    let editteambutton = document.getElementById('editteambutton');
    document.getElementById('teamnameinput').value = "";
    document.getElementById('teamcatogeryinput').value = "";
    document.getElementById('memberemailinput').value = "";
    editteambutton.style.display = "none"
    createteamid.style.display = "block"
};

function settingteam(index) {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];

    let name = teamdata[index].name;
    let category = teamdata[index].category;
    let email = teamdata[index].email;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("category", category);
    sessionStorage.setItem("email", JSON.stringify(email));
    sessionStorage.setItem("index", index);

    window.location.href = "./teamowner.html"

}


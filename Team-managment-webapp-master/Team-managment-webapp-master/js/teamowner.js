function showquestion(){
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let index = sessionStorage.getItem("index");
    let questionhtml = '';
    
    let questionfromindex = teamdata[index].question;
    questionfromindex.forEach((qitem, qi) =>{
        questionhtml += `<div class="col-md-12 col-10">
                            <div class="d-flex justify-content-between">
                                <p><b>Q:${qi + 1}</b> ${qitem}</p>
                                <div class="col-md-2 col-2"> 
                                    <button class="btn btn-dark btn-sm outline-remove borderradius-remove" 
                                    onclick="removeonequestion(${qi})">
                                    <i class="bi bi-dash-lg"></i>
                                </div>
                            </div>
                        </div>`

    })
    // let questionhtml = ''
    document.getElementById('questionownerview').innerHTML = questionhtml;
}

function removeonequestion(qi){
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let index = sessionStorage.getItem("index")
    teamdata[index].question.splice(qi, 1)
    localStorage.setItem("addteam", JSON.stringify(teamdata));
    showquestion();
}

function addquestion() {
    var addquestioninput = document.getElementById('addquestioninput').value;
    let index = sessionStorage.getItem("index")

    if (addquestioninput.length !== 0) {
        let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
        teamdata[index].question.push(addquestioninput);
        localStorage.setItem("addteam", JSON.stringify(teamdata));
        document.getElementById('addquestioninput').value = "";
    } else{
        alert("Type Question")
    }
    showquestion()
}

function settingteamGetData() {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let index = sessionStorage.getItem("index");
    let emailfromindex = teamdata[index].email;
    let emailhtml = '';
    emailfromindex.forEach((eitem, ei) => {
        emailhtml += `<div class="col-md-4">
                        <li class="mainmemberli">
                        <span class="memberli"> ${eitem}  <span><i ondblclick="removeonemember(${ei})" class="bi bi-x-circle-fill"></i></span></span>
                        </li> 
                    </div>`
    });
    document.getElementById('memberownerview').innerHTML = emailhtml;
}


function removeonemember(ei) {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let index = sessionStorage.getItem("index")
    teamdata[index].email.splice(ei, 1)
    localStorage.setItem("addteam", JSON.stringify(teamdata));
    settingteamGetData();
}

function addmembers() {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let addmembersinput = document.getElementById('addmembersinput').value;
    let index = sessionStorage.getItem("index");
    if (addmembersinput.length > 0) {
        teamdata[index].email.push(addmembersinput);
        localStorage.setItem("addteam", JSON.stringify(teamdata));
        document.getElementById('addmembersinput').value = ""
        settingteamGetData();
    } else {
        swal("Please Input First")
    }
}

function deleteteam() {
    let teamdata = JSON.parse(localStorage.getItem("addteam")) || [];
    let index = sessionStorage.getItem("index")
    teamdata.splice(index, 1);
    localStorage.setItem("addteam", JSON.stringify(teamdata));
    window.location.href = "./teams.html"
}
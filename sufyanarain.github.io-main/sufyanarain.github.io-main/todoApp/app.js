// let userInp = prompt("please enter");


// let para = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ex earumquibusdam. bich Quia commodi rem quae alias quo esse facere. Sapiente maximenam commodi minus.";

// let firstPara = "";
// let secondPara = "";
// let newWord = "don't abuse";


// for(var i = 0;i<para.length;i++){
//     if(userInp === para.slice(i,i+userInp.length)){
//         console.log("found");
//         firstPara = para.slice(0,i)
//         secondPara = para.slice(i+userInp.length)    

//         console.log(firstPara+newWord+secondPara)



//     }
// }


let userInput = document.getElementById("userInput");
let addBtn = document.getElementById("addBtn");
let listUl = document.getElementById("listUl");
let deleteBtn = document.getElementById("deleteBtn");
let deleteAllBtn = document.getElementById("deleteAllBtn");
let listLi = document.getElementById("listLi");
let editBtn1 = document.getElementById("editBtn")
deleteAllBtn.addEventListener('click', function () {
    listUl.innerHTML = ""
})


function deleteFunc(thisli) {

    // this.parentNode.remove()
    thisli.parentNode.remove()
}

addBtn.addEventListener("click", addBtnFunc)

function addBtnFunc() {
    
        listUl.innerHTML += "<li id='listLi' class='hideFont'>" + userInput.value + "<button id='deleteBtn' onclick='deleteFunc(this)''>Delete</button><button id='editBtn' onclick='editBtn11(this)'>Edit</button></li>";
        userInput.value = " "
    


}

userInput.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        // event.preventDefault();
        addBtnFunc()
        // addBtn.click();
    }
})


function editBtn11(editbtn) {
    var inputEdit = document.createElement("input");
    inputEdit.setAttribute("id", "inputEdit112")
    editbtn.parentNode.appendChild(inputEdit);
    // console.log(editbtn.parentNode.childNodes[0].nodeValue)
    inputEdit.value = editbtn.parentNode.childNodes[0].nodeValue;
    // localStorage.getItem.name
    // console.log(editbtn.parentNode.childNodes[0].nodeValue)
    // editbtn.remove()
    var createupdateBtn = document.createElement("button");
    var updateBtnText = document.createTextNode("update");
    createupdateBtn.addEventListener('click', updateFunc)
    createupdateBtn.appendChild(updateBtnText)
    // console.log(editbtn.parentNode)
    
    editbtn.parentNode.appendChild(createupdateBtn);
    
    if (!createupdateBtn.disabled) {
        editbtn.classList = "hidden";
        editbtn.parentNode.childNodes[1].classList = "hidden"
        editbtn.parentNode.id = "listLin"
        
        console.log(editbtn.parentNode)

        // console.log(editbtn.parentNode.childNodes[1])

    }


}

function updateFunc() {
    // console.log(this.parentNode.childNodes[3].value)
    // console.log(this.parentNode.childNodes)
    var inputEdit112 = document.getElementById("inputEdit112")
    this.parentNode.childNodes[0].nodeValue = this.parentNode.childNodes[3].value
    // console.log(this.parentNode.childNodes[2])
    this.parentNode.childNodes[2].classList.remove("hidden");
    this.parentNode.childNodes[1].classList.remove("hidden")
    console.log(this.parentNode)
    // console.log(this.parentNode.childNodes[1].childNodes[0].nodeValue)
    // console.log(inputEdit112)
    this.parentNode.id = "listLi"
    inputEdit112.remove()
    this.remove()


    // editBtn11()

}



















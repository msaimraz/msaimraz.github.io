

var start = document.getElementById("start")

start.addEventListener("click",function(){
    var userName = document.getElementById("userName")
    localStorage.setItem("userquiz",userName.value)
    var da = localStorage.getItem("userquiz")
    
})
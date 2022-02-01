var dismissBtn = document.querySelectorAll(".fa-times-circle");
var ignoreBtn = document.querySelector(".action-2");
var advancedAlert =document.querySelector(".advanced-alert");

dismissBtn.forEach(eachBtn => {
    eachBtn.addEventListener("click", (e) =>{
           e.target.parentElement.style.display = "none";
    })
})

ignoreBtn.addEventListener("click", ()=>{
    console.log("hi");
      advancedAlert.style.display = "none";
})
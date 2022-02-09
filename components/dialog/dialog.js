var buttons = document.querySelectorAll("button");
var alertDialog = document.querySelector(".et_alert-dialog");
var simpleDialog = document.querySelector(".et_simple-dialog");
var confirmationDialog = document.querySelector(".et_confirmation-dialog-container");
var alertDialogCloseBtns = document.querySelectorAll(".alert-dialog-closeBtn");
var simpleDialogCloseBtns = document.querySelectorAll(".simple-dialog-closeBtn");
var confirmationDialogCloseBtns = document.querySelectorAll(".confirmation-dialog-close-btn");

buttons.forEach(eachBtn =>{
    eachBtn.addEventListener("click", (e) =>{
        if(e.target.textContent === "OPEN ALERT DIALOG"){
            alertDialog.style.display = "block";
        }
        if(e.target.textContent === "OPEN SIMPLE DIALOG"){
            simpleDialog.style.display = "block";
        }
        if(e.target.textContent === "OPEN CONFIRMATION DIALOG"){
            confirmationDialog.style.display = "block";
        }
    })
})

alertDialogCloseBtns.forEach(eachBtn => {
    eachBtn.addEventListener("click", () => {
        alertDialog.style.display = "none";
    })
})

simpleDialogCloseBtns.forEach(eachBtn => {
    eachBtn.addEventListener("click", () => {
        simpleDialog.style.display = "none";
    })
})

confirmationDialogCloseBtns.forEach(eachBtn => {
    eachBtn.addEventListener("click", () => {
        confirmationDialog.style.display = "none";
    })
})
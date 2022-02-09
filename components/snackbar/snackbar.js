var baselineBtn = document.querySelector(".et_baseline");
var leadingBtn = document.querySelector(".et_leading");
var stackedBtn = document.querySelector(".et_stacked");
var closeBtns = document.querySelectorAll(".snackbar-closeBtn");
var baselineSnackbar = document.querySelector(".et_baseline-snackbar");
var leadingSnackbar = document.querySelector(".et_leading-snackbar");
var stackedSnackbar = document.querySelector(".et_stacked-snackbar");
var snackbars = document.querySelector(".snackbar");

baselineBtn.addEventListener("click", () => {
    baselineSnackbar.style.visibility = "visible";
});

leadingBtn.addEventListener("click", () => {
    leadingSnackbar.style.visibility = "visible";
});

stackedBtn.addEventListener("click", () => {
    stackedSnackbar.style.visibility = "visible";
});

closeBtns.forEach(eachBtn => {
    eachBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn1")) {
            baselineSnackbar.style.visibility = "hidden";
        }
        if (e.target.classList.contains("btn2")) {
            leadingSnackbar.style.visibility = "hidden";
        }
        if (e.target.classList.contains("btn3")) {
            stackedSnackbar.style.visibility = "hidden";
        }
    })
})
var floatingBtn = document.querySelector(".fa-btn");    // will work for the docs
var popUpList = document.querySelector(".fa-btn-pop-up-list");
var floatingBtnOfComponentOne = document.querySelector(".floating-btn");                    // will work for the component
var popUpListOfComponentOne = document.querySelector(".floating-btn-pop-up-list");
var floatingBtn2 = document.querySelector(".fa-icon-btn");
var popUpBtns = document.querySelector(".pop-up-btns");

floatingBtn.addEventListener("click", () => {
    if (popUpList.style.visibility !== "visible") {
        popUpList.style.visibility = "visible";
        floatingBtn.style.transform = "rotate(135deg)";
    }else{
        popUpList.style.visibility = "hidden";
        floatingBtn.style.transform = "rotate(180deg)";
    }
})

floatingBtnOfComponentOne.addEventListener("click", () => {
    if (popUpListOfComponentOne.style.visibility !== "visible") {
        popUpListOfComponentOne.style.visibility = "visible";
        floatingBtnOfComponentOne.style.transform = "rotate(135deg)";
    }else{
        popUpListOfComponentOne.style.visibility = "hidden";
        floatingBtnOfComponentOne.style.transform = "rotate(180deg)";
    }
})

floatingBtn2.addEventListener("click", () =>{
    if(popUpBtns.style.visibility !== "visible"){
        popUpBtns.style.visibility = "visible";
    }else{
        popUpBtns.style.visibility = "hidden";
    }
})
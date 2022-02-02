var floatingBtn = document.querySelector(".fa-btn");
var popUpList = document.querySelector(".fa-btn-pop-up-list");
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

floatingBtn2.addEventListener("click", () =>{
    if(popUpBtns.style.visibility !== "visible"){
        popUpBtns.style.visibility = "visible";
    }else{
        popUpBtns.style.visibility = "hidden";
    }
})
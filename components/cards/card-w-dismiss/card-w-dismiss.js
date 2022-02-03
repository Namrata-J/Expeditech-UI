var dismissBtn = document.querySelectorAll(".et_card-dismiss-btn");

dismissBtn.forEach(eachBtn => {
    eachBtn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.style.display= "none";
    })
})
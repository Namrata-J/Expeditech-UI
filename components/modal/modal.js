const showModalBtn = document.querySelector(".show-modal-btn");
const modal = document.querySelector(".et_popUp-modal");
const modalActionBtns = document.querySelectorAll(".modal-action-btn");

function showModal() {
    modal.style.display = "block";
}

modalActionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "none";
    })
})

showModalBtn.addEventListener("click", showModal);


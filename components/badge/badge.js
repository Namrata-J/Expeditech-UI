var toogleBtn = document.querySelectorAll(".toggle-btn");

toogleBtn.forEach(eachBtn =>{
    eachBtn.addEventListener("click", (e) => {
        if(e.target.nextElementSibling.style.display !== "none"){
             e.target.nextElementSibling.style.display ="none";
        }else{
            e.target.nextElementSibling.style.display = "inline-block";
        }
    })
});
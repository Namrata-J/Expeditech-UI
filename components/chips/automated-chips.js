var innerContainer = document.querySelector(".et_automated-chip-inner-container");
var subHeading = document.querySelector(".et_automated-chip-inner-container-subheading");
var chips = document.querySelector(".et_automated-chips");
var chipsInput = document.querySelector(".et_automated-chips-input");


innerContainer.addEventListener("click", () => {
    subHeading.style.position = "absolute";
    subHeading.style.top = "5px";
    subHeading.style.fontSize = "0.8rem";
    subHeading.style.color = "blue";
    innerContainer.style.borderBottom = "2px solid var(--secondary-color)";
    subHeading.style.transition = "all 0.5s"
    chipsInput.style.marginTop = "1rem";
    chipsInput.style.display = "inline-block";
    chipsInput.focus();
});

chipsInput.addEventListener("blur", () => {
    chipsInput.style.display = "none";
    subHeading.style.position = "relative";
    subHeading.style.top = "0px";
    subHeading.style.fontSize = "large";
    subHeading.style.color = "var(--dark-gray)";
});

chipsInput.addEventListener("keypress", (eachkeystroke) => {
       if(eachkeystroke.which === 13){
           chips.appendChild(function(){
               var chipsAppendedChild = document.createElement("div");
               chipsAppendedChild.classList.add("et_automated-chips-appended-child");
               chipsAppendedChild.addEventListener('click', chipClickHandler);

               chipsAppendedChild.append(
                   (function(){
                       var chipsAppendedChildText = document.createElement("span");
                       chipsAppendedChildText.classList.add("at_automated-chips-appended-child-text");
                       chipsAppendedChildText.innerHTML = chipsInput.value;
                       return chipsAppendedChildText;
                   })(),
                   (function(){
                       var chipsAppendedChildButton = document.createElement("span");
                       chipsAppendedChildButton.classList.add("et_automated_chips-appended-child-button");
                       chipsAppendedChildButton.innerHTML = "x";
                       return chipsAppendedChildButton;
                   })()
               );
               return chipsAppendedChild;
           }());
           chipsInput.value = "";
       }
});
function chipClickHandler(event){
    chips.removeChild(event.currentTarget);
 }
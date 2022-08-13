<p align="center">
   <img src="https://github.com/Namrata-J/Expeditech-UI/blob/dev/Images/Expeditech%20UI-logos.jpeg" alt="drawing" width="400"/>
</p>
<p align="center">
[Expeditech UI](https://expeditech-ui.netlify.app/)
</p>

### Tech stack
* HTML5
* CSS3
* Vanilla JS

### Features
* provides reusable or utility classes making development faster and easier.
* easy to use, not much complex.
* components are responsive.
* provides flexibility.
* layouts are very much consistent in its design.
* has "border-box" box-sizing.

### Installation
Installation process of Expeditech UI is easy. Just import the below links accordingly.

For making these components work, you need to import the stylesheet. Just simply copy & paste the below code in your head tag.

```
<link rel="stylesheet" href="https://expeditech-ui.netlify.app/components/index.css">
```

For using the same icons or for importing any other from font-awesome you need to simply copy & paste the code below in your head file.

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
```

### Components provided
Provides 10+ components.
#### Alerts
Provides two kinds of alerts.
  #### - dismissible alerts(js alerts)
  ![image](https://user-images.githubusercontent.com/82696858/183887527-d7bd8f8d-6379-4823-97a0-8e1c5764843f.png)
  
  ![image](https://user-images.githubusercontent.com/82696858/183883333-a4ffb9ef-0a93-4528-a084-c6ff2e4d0dfa.png)
  
  JS being used for dismissible alerts:
  ```
  var dismissBtn = document.querySelectorAll(".fa-times-circle");
var ignoreBtn = document.querySelector(".action-2");
var advancedAlert =document.querySelector(".advanced-alert");

dismissBtn.forEach(eachBtn => {
    eachBtn.addEventListener("click", (e) =>{
           e.target.parentElement.style.display = "none";
    })
})

ignoreBtn.addEventListener("click", ()=>{
      advancedAlert.style.display = "none";
})
```

  #### - no js alerts
  ![image](https://user-images.githubusercontent.com/82696858/183887720-97186b7f-0dd3-4182-b2c9-3504605bb17b.png)


#### Avatar
![image](https://user-images.githubusercontent.com/82696858/183888147-507c9fdf-5431-4e93-a5e5-dbcf9d2d9941.png)

For changing the size of avatar, you can try using classes such as xs-avatar, s-avatar, m-avatar & l-avatar.

![image](https://user-images.githubusercontent.com/82696858/183887897-2ff4ee0c-1a26-466b-bd9b-e5c65a37c4f7.png)

To change it to rounded avatar, just change the utility class b-rad4 ---> b-rad2

![image](https://user-images.githubusercontent.com/82696858/183887964-f82cd4c3-3355-441b-b994-90cb03495758.png)

#### Badge
![image](https://user-images.githubusercontent.com/82696858/183888906-3e63db89-4634-4f00-a0e3-46937a5545ac.png)

![image](https://user-images.githubusercontent.com/82696858/183889205-c26205e0-53aa-4b0c-ba5b-d467a39a820d.png)

![image](https://user-images.githubusercontent.com/82696858/183889356-80e007f3-8e2f-4a2d-809f-34b2bdb584e9.png)

JS code for the above button with toggling badge
```
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
```

#### Button
![image](https://user-images.githubusercontent.com/82696858/183891218-5569f150-45e1-47b3-a4ad-6ab52b9c5094.png)

![image](https://user-images.githubusercontent.com/82696858/183897814-455cf88b-1664-4ad9-90b9-a3f204ca613b.png)

![image](https://user-images.githubusercontent.com/82696858/183897896-b155918c-c303-4e95-a6fb-71a1c640b227.png)

JS for floating button component
```
var floatingBtn = document.querySelector(".fa-btn");    // will work for the docs
var popUpList = document.querySelector(".fa-btn-pop-up-list");
var floatingBtnOfComponentOne = document.querySelector(".floating-btn");         // will work for the component
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
```


#### Cards
Provides five types of cards.
  #### - Basic cards
  ![image](https://user-images.githubusercontent.com/82696858/183891631-ea6a7195-50b9-4a44-a21f-95eed7f31752.png)

  #### - Badge cards
  ![image](https://user-images.githubusercontent.com/82696858/183891795-4bb60741-3e32-4ed2-b164-f85c443ac94d.png)

  #### - Dismissible cards
  ![image](https://user-images.githubusercontent.com/82696858/183891910-d2aba346-61bb-486d-93d3-dde08e455c1c.png)

JS for dismissible card
```
  var dismissBtn = document.querySelectorAll(".et_card-dismiss-btn");

dismissBtn.forEach(eachBtn => {
    eachBtn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.style.display= "none";
    })
})
```

  #### - Text-overlay cards
  ![image](https://user-images.githubusercontent.com/82696858/183892272-ef322866-50df-4f7e-a9a0-c1353fdc4883.png)

  #### - Text-only cards
  ![image](https://user-images.githubusercontent.com/82696858/183892415-184bafdb-fb8c-4f53-9fbd-269413e0e08b.png)


#### Image
![image](https://user-images.githubusercontent.com/82696858/183892695-db36c24e-4ca9-4019-a611-60d21639ce4b.png)

To make image less circular change the border-radius utility class.

#### Input
![image](https://user-images.githubusercontent.com/82696858/183895117-4169c140-5476-4567-aba5-30af589551cf.png)

#### Snackbar
![image](https://user-images.githubusercontent.com/82696858/183895397-8f7c0767-56d9-408f-b633-026e0740ef10.png)

JS for dismissible snackbars
```
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
```

#### Chip
![image](https://user-images.githubusercontent.com/82696858/183895824-6d4a174b-0d1f-4510-9fc7-9bdfc2f5831e.png)

JS for automated chips
```
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
 ```
 
 ![image](https://user-images.githubusercontent.com/82696858/183896027-b3380b38-ca5b-4bbf-81d8-24e8e47906aa.png)

JS for drag and drop feature
```
var draggables = document.querySelectorAll(".et_d-and-d-chip");
var container = document.querySelector(".et_d-and-d-chip-inner-container");

draggables.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add("dragging");
    });
    item.addEventListener('dragend', () => {
        item.classList.remove("dragging");
    });
});

container.addEventListener('dragover', (e) => {
    e.preventDefault();
});

container.addEventListener('dragenter', (e) => {
    e.preventDefault();
});

container.addEventListener('drop', (e) => {
    const draggable = document.querySelector(".dragging");
    container.appendChild(draggable);
});
```

#### Dialog
![image](https://user-images.githubusercontent.com/82696858/183896309-d65818fe-6392-4f3c-b28a-c5400236a21e.png)

JS for dialog component
```
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
```

#### Rating
![image](https://user-images.githubusercontent.com/82696858/183896528-72773f6e-03a0-4b09-bc68-457f625bda58.png)


#### Grid
![image](https://user-images.githubusercontent.com/82696858/183896720-444ab14a-4ab1-4324-9160-1471f059d662.png)


#### List 
![image](https://user-images.githubusercontent.com/82696858/183896808-b26b4ebf-caa1-4ef5-82ec-97324b681f19.png)


#### Modal
![image](https://user-images.githubusercontent.com/82696858/183896935-a2684a8c-15a5-404f-be75-9aa0ee853588.png)

JS for modal component
```
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
```

#### Navigation
![image](https://user-images.githubusercontent.com/82696858/183897166-0f4fb1f6-79b0-4f87-8d28-7438a7cad991.png)


### Shades used

    --primary-color: rgb(241, 237, 225);
    --secondary-color: rgb(33, 59, 116);
    --white-color: white;
    --action: rgb(81, 102, 148);
    --black: black;
    --light-gray: rgb(95, 97, 104);
    --medium-gray: rgb(182, 185, 185);
    --lightest-gray: rgb(224, 222, 214);
    --light-green: rgb(94, 205, 50);
    --light-red: rgb(230, 59, 59);
    --lightest-blue: rgb(197, 224, 236);
    --lightest-green: rgb(183, 245, 167);
    --lightest-red: rgb(253, 165, 165);
    --lightest-yellow: rgb(245, 245, 159);
    --lightest-turquiose: rgb(167, 252, 252);
    --green: rgb(102, 141, 31);
    --turquoise: rgb(60, 224, 208);
    --dark-gray: rgb(50, 50, 53);
    --light-bluish-shade: rgb(234, 237, 243);
    --dark-yellow: rgb(250, 205, 6);
    
  
### Utility classes

### Typograhy utility classes
#### Headings
Headings have these styles being implemented on them.
```
h1 {
    font-size: 3rem;
    line-height: 4rem;
}
```
```
h2 {
    font-size: 2rem;
    line-height: 2.5rem;
}
```
```
h3 {
    font-size: 1.5rem;
    line-height: 2rem;
}
```
```
h4 {
    font-size: 1rem;
    line-height: 1.5rem;
}
```
```
h5 {
    font-size: 0.5rem;
    line-height: 1rem;
}
```
```
h6 {
    font-size: 0.1rem;
    line-height: 0.5rem;
}
```

#### Texts
Use these utility classes and overwrite and styling your typography.
```
.t-1 {
    font-size: 3rem;
    line-height: 4rem;
}
```
```
.t-2 {
    font-size: 2rem;
    line-height: 2.5rem;
}
```
```
.t-3 {
    font-size: 1.5rem;
    line-height: 2rem;
}
```
```
.t-4 {
    font-size: 1rem;
    line-height: 1.5rem;
}
```
```
.t-5 {
    font-size: 0.5rem;
    line-height: 1rem;
}
```

#### Gray Text Shades
Choose any shade of gray for your typography by just integrating these utility classes.
```
.g-t1 {
    color: var(--light-bluish-shade);
}
```
```
.g-t2 {
    color: var(--lightest-gray);
}
```
```
.g-t3 {
    color: var(--medium-gray);
}
```
```
.g-t4 {
    color: var(--light-gray);
}
```
```
.g-t5 {
    color: var(--dark-gray);
}
```

#### Text Alignment
Would help you align text in right, left and center.
```
.a-tr {
    text-align: right;
}
```
```
.a-tl {
    text-align: left;
}
```
```
.a-tc {
    text-align: center;
}
```

#### Typography
Helps you to apply fontweight on your typography.
```
.fw-1 {
    font-weight: 300;
}
```
```
.fw-2 {
    font-weight: 400;
}
```
```
.fw-3 {
    font-weight: 600;
}
```
```
.fw-4 {
    font-weight: 700;
}
```
```
.fw-5 {
    font-weight: 900;
}
```

### Spacing Utility Classes
#### Spacing
Adjust your content spacing.
```
.m-1 {
    margin: 0.5rem;
}
```
```
.m-2 {
    margin: 1rem;
}
```
```
.m-3 {
    margin: 1.5rem;
}
```
```
.m-4 {
    margin: 2rem;
}
```
```
.m-5 {
    margin: 2.5rem;
}
```
```
.m-6 {
    margin: 4rem;
}
```

#### Border Radius
Gives you utility classes for implementing border-radius.
```
.b-rad1 {
    border-radius: 5px;
}
```
```
.b-rad2 {
    border-radius: 10px;
}
```
```
.b-rad3 {
    border-radius: 15px;
}
```
```
.b-rad4 {
    border-radius: 999px;
}
```




Expeditech UI takes accountability for user feedbacks, we believe in providing the user the best experience.<br>
Do let us know any recommendations on further improvements.


### Connect to us via social platforms
[Twitter](https://twitter.com/muse_the_coder) <br>
[LinkedIn](https://www.linkedin.com/in/namrata-jain-2b6203216/) <br>
[Instagram](https://www.instagram.com/the_dexterous_me/?r=nametag) <br>
[Gmail](mailto: namratajain29001@gmail.com) <br>


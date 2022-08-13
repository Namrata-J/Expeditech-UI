<p align="center">
   <img src="https://github.com/Namrata-J/Expeditech-UI/blob/dev/Images/Expeditech%20UI-logos.jpeg" alt="drawing" width="400"/>
</p>
<p align="center">
[Expeditech UI](https://expeditech-ui.netlify.app/)
</p>

### Tech stack
<img src="https://user-images.githubusercontent.com/82696858/184472725-bc1abb53-f984-480a-b9be-556d608521c7.png" width="50"/>  <img src="https://user-images.githubusercontent.com/82696858/184472822-1c89a35e-d58f-4e3b-ae11-7b543a30acde.png" width="45"/>  <img src="https://user-images.githubusercontent.com/82696858/184472976-3bdd2cb6-bfa4-4de5-878c-b4f4fccfd8ee.png" width="45"/>

### Features
* reusable utility classes
* responsive 10+ components with previews
* clean ui
* easy to understand

### Table Of Contents<a name="tableOfContents"></a>
1. [Quick Start](#quickStart)
2. [Deployment Status](#status)
3. [Components](#component)
4. [Shades used](#shades)
5. [Utility classes](#utility)
6. [Social Links](#social)
7. [Contribution guidlines](#contribution)

<hr>

## Quick Start<a id="quickStart"></a>
To load Expeditech UI components CSS in your project, copy & paste the below ```<Link>``` tag into your head before all the stylesheets.

HTML
```
<link rel="stylesheet" href="https://expeditech-ui.netlify.app/components/index.css">
```

CSS
```
@import url("https://expeditech-ui.netlify.app/components/index.css")
```

For font-awesome icons.

```
<link 
  rel="stylesheet" 
  href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
  integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
```

## Deployment Status<a name="status"></a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/377a9306-9b0d-4b84-bb64-6cfa8f039b8c/deploy-status)](https://app.netlify.com/sites/expeditech-ui/deploys)

[To know more about status badges visit site -->](https://docs.netlify.com/monitor-sites/status-badges/?_ga=2.239245701.74730842.1660376495-236702144.1656589951)

<hr>

## Components<a name="component"></a>

<hr>

## Alerts
Provides two kinds of alerts.
1. dismissible alerts(js alerts)
2. no js alerts
  
  simple dismissible alert<br>
  ![image](https://user-images.githubusercontent.com/82696858/184475500-4eec30b8-cdd1-47e3-a68d-14d57ca1c17c.png)
  
  advanced dismissible alert<br>
  ![image](https://user-images.githubusercontent.com/82696858/184475586-b2a1f79b-ec0d-44fe-9d04-3fa0823bf125.png)
  
  no-js alert<br>
  ![image](https://user-images.githubusercontent.com/82696858/184475645-893ec5de-2bdb-41b7-ac3c-2cccdb5fd6f2.png)
  
  JS for dismissible alerts:
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

<hr>

## Avatar
<img src="https://user-images.githubusercontent.com/82696858/184475710-d82be011-5a09-470e-a915-486b3c25c148.png" width="60"/><img src="https://user-images.githubusercontent.com/82696858/184475766-ba0af66b-b743-459f-a6bc-9491f33ae17d.png" width="70"/>

- For changing the size of avatar, you can try using classes such as xs-avatar, s-avatar, m-avatar & l-avatar.
- To change it to rounded avatar, just change the utility class b-rad4 ---> b-rad2

<hr>

## Badge
<img src="https://user-images.githubusercontent.com/82696858/184475900-048845d4-ddd1-46d1-bda6-9c5c4309e23a.png"><img src="https://user-images.githubusercontent.com/82696858/184475924-65e14331-01a9-47e9-9da2-e8ce693890fe.png"><img src="https://user-images.githubusercontent.com/82696858/184475966-e000cca3-d445-4136-8131-5434b246f24b.png">

JS code for the above hide button with toggling badge
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
<hr>

## Button
<img src="https://user-images.githubusercontent.com/82696858/184476044-52367ad3-5482-4679-85cc-78195593cacb.png"><img src="https://user-images.githubusercontent.com/82696858/184476139-9401b20f-3203-46fa-a211-7ab49ebd3bd4.png">

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

<hr>

## Cards
Provides five types of cards.
  1. Basic cards
  2. Badge cards
  3. Dismissible cards
  4. Text-overlay cards
  5. Text-only cards
  
  <img src="https://user-images.githubusercontent.com/82696858/183892415-184bafdb-fb8c-4f53-9fbd-269413e0e08b.png" height="200">
  
JS for dismissible card
```
  var dismissBtn = document.querySelectorAll(".et_card-dismiss-btn");

dismissBtn.forEach(eachBtn => {
    eachBtn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.style.display= "none";
    })
})
```

<hr>

## Image
<img src="https://user-images.githubusercontent.com/82696858/183892695-db36c24e-4ca9-4019-a611-60d21639ce4b.png" width="100">

To make image less circular change the border-radius utility class.

<hr>

## Input
![image](https://user-images.githubusercontent.com/82696858/184479349-20853e6a-902f-47be-8ca0-7cd8c322e692.png)

<hr>

## Snackbar
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

<hr>

## Chip
![image](https://user-images.githubusercontent.com/82696858/183895824-6d4a174b-0d1f-4510-9fc7-9bdfc2f5831e.png)

![image](https://user-images.githubusercontent.com/82696858/183896027-b3380b38-ca5b-4bbf-81d8-24e8e47906aa.png)

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

<hr>

## Dialog
![image](https://user-images.githubusercontent.com/82696858/184479450-f4d1fd01-250b-4b73-88d0-beff517c7a64.png)

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

<hr>

## Rating
![image](https://user-images.githubusercontent.com/82696858/184479524-b322bce3-bfd4-4bbc-b60a-590d46ee7883.png)

<hr>

## Grid
![image](https://user-images.githubusercontent.com/82696858/183896720-444ab14a-4ab1-4324-9160-1471f059d662.png)

<hr>

## List 
![image](https://user-images.githubusercontent.com/82696858/184479580-6597331d-eeec-4ac6-bccf-3c4db19588a8.png)

<hr>

## Modal
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

<hr>

## Navigation
![image](https://user-images.githubusercontent.com/82696858/183897166-0f4fb1f6-79b0-4f87-8d28-7438a7cad991.png)

<hr>

## Shades used<a name="shades"></a>

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
    
<hr>  
  
## Utility classes<a name="utility"></a>

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

<hr>

Expeditech UI takes accountability for user feedbacks, we believe in providing the user the best experience.<br>
Do let us know any recommendations on further improvements.

## Connect to us via social platforms<a name="social"></a>
[Twitter](https://twitter.com/muse_the_coder) <br>
[LinkedIn](https://www.linkedin.com/in/namrata-jain-2b6203216/) <br>
[Instagram](https://www.instagram.com/the_dexterous_me/?r=nametag) <br>
[Gmail](mailto: namratajain29001@gmail.com) <br>

<hr>

## Contribution guidlines<a name="contribution"></a>
For contributing to expeditech UI,
1. Clone & Fork the repo.
2. Make a feature branch from dev.
3. Commit and push those changes.
4. Raise the PR(pull request).


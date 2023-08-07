<p align="center">
   <img src="https://user-images.githubusercontent.com/82696858/185879567-d3cab6c4-6a29-4a80-9096-e6111d69441b.png" alt="drawing" width="400"/>
</p>

![image](https://img.shields.io/github/issues/Namrata-J/Expeditech-UI) ![image](https://img.shields.io/github/forks/Namrata-J/Expeditech-UI) ![image](https://img.shields.io/github/stars/Namrata-J/Expeditech-UI)





                              [Expeditech UI](https://expeditech-ui.netlify.app/)

### Tech stack
<img src="https://user-images.githubusercontent.com/82696858/184472725-bc1abb53-f984-480a-b9be-556d608521c7.png" width="50"/>  <img src="https://user-images.githubusercontent.com/82696858/184472822-1c89a35e-d58f-4e3b-ae11-7b543a30acde.png" width="45"/>  <img src="https://user-images.githubusercontent.com/82696858/184472976-3bdd2cb6-bfa4-4de5-878c-b4f4fccfd8ee.png" width="45"/>

### Features
* reusable utility classes
* responsive 10+ components including 7+ functional components with preview
* clean ui
* easy to understand

### Table Of Contents<a name="tableOfContents"></a>
1. [Quick Start](#quickStart)
2. [Deployment Status](#status)
3. [Components](#component)
4. [Shades used](#shades)
5. [Utility classes](#utility)
6. [Glimpse Of Expeditech UI](#glimpse)
7. [Social Links](#social)
8. [Contribution guidlines](#contribution)

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

1. [Alerts](#alerts)
2. [Avatar](#avatar)
3. [Badge](#badge)
4. [Button](#button)
5. [Cards](#cards)
6. [Image](#image)
7. [Input](#input)
8. [Snackbar](#snackbar)
9. [Chip](#chip)
10. [Dialog](#dialog)
11. [Rating](#rating)
12. [Grid](#grid)
13. [List](#list)
14. [Modal](#modal)
15. [Navigation](#navigation)

## Alerts<a name="alerts"></a>
Provides two kinds of alerts.
1. dismissible alerts(js alerts)
2. no js alerts
  
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

## Avatar<a name="avatar"></a>
- For changing the size of avatar, you can try using classes such as xs-avatar, s-avatar, m-avatar & l-avatar.
- To change it to rounded avatar, just change the utility class b-rad4 ---> b-rad2

<hr>

## Badge<a name="badge"></a>

JS code for hide button with toggling badge
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

## Button<a name="button"></a>

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

## Cards<a name="cards"></a>
Provides five types of cards.
  1. Basic cards
  2. Badge cards
  3. Dismissible cards
  4. Text-overlay cards
  5. Text-only cards
  
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

## Image<a name="image"></a>
To make image less circular change the border-radius utility class.

<hr>

## Input<a name="input"></a>
Provides default inputs & inputs with validation. 

<hr>

## Snackbar<a name="snackbar"></a>

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

## Chip<a name="chip"></a>

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

## Dialog<a name="dialog"></a>

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

## Rating<a name="rating"></a>
A star rating comprises of stars with the amount usually at a maximum of five. You let your users rate an item using stars. One star means poor; five is excellent. By selecting more than one star, all previous stars should be filled.

<hr>

## Grid<a name="grid"></a>
Provides:
- simplified grid with two items
- simplified grid with three items.

<hr>

## List<a name="list"></a> 
Provides you list component.

<hr>

## Modal<a name="modal"></a>

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

## Navigation<a name="navigation"></a>
Navigation component helps you implement navigation, from simple button clicks to more complex patterns, such as app bars and the navigation drawer.

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

## Glimpse Of Expeditech UI<a name="glimpse"></a>


https://user-images.githubusercontent.com/82696858/187926416-a30fcc03-50ba-4582-8a4d-7a4a1ad6bb46.mp4




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


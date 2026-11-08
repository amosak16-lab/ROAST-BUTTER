console.log("JavaScript מחובר בהצלחה!");

//let button = document.getElementById("welcomeButton");
//let message = document.getElementById("welcomeMessage");
//let resetButton = document.getElementById("resetButton");
let menuButton = document.getElementById("menuButton");
let navMenu = document.getElementById("navMenu");

if (menuButton && navMenu && window.innerWidth <= 600) {
    navMenu.classList.add("hidden");
}

//let clickCount = 0;א

//if (button && message) {
 // button.addEventListener("click", function () {
  //  clickCount++;
  //  button.textContent = "לחצת " + clickCount + " פעמים";

    //if (clickCount === 1) {
    //  message.textContent = "ברוכים הבאים ל-ROASTÉ & BUTTER!";
   // } else if (clickCount === 2) {
   //   message.textContent = "שמחים שבאתם לבקר!";
  //  } else {
  //    message.textContent = "מקווים שתיהנו מהחוויה שלנו!";
 //   }
 // });

 // if (resetButton && button && message) {
 //   resetButton.addEventListener("click", function() {

 //       clickCount = 0;

  //      message.textContent = "";

  //      button.textContent = "לחץ כאן";

   // });
//}
//}

if (menuButton && navMenu) {
    menuButton.addEventListener("click", function() {

        navMenu.classList.toggle("hidden");

        if (navMenu.classList.contains("hidden")) {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "פתיחת תפריט");
        } else {
            menuButton.textContent = "✕";
            menuButton.setAttribute("aria-expanded", "true");
            menuButton.setAttribute("aria-label", "סגירת תפריט");
        }

    });
}

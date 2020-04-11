
//Get the button
mybutton = document.getElementById("back-to-top-button");
//Get the button
mybuttonreg = document.getElementById("back-to-top-button-reg");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunctionreg()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";

  }
}

function scrollFunctionreg() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    mybuttonreg.style.display = "block";
  } else {

      mybuttonreg.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menuFunction() {
  var x = document.getElementById("myNavigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

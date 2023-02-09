/*
  $(document).ready(function() {
    $("a").click(function(event) {
      event.preventDefault();
      var targetSection = $(this).attr("href");
      $('html, body').animate({
        scrollTop: $(targetSection).offset().top
      }, 1000);
    })
  });
*/

const productBoxes = document.querySelectorAll(".product-box");
const popups = document.querySelectorAll(".popup");
const closeButtons = document.querySelectorAll(".close");

productBoxes.forEach(function(productBox, index) {
  productBox.addEventListener("click", function() {
    popups[index].style.display = "block";
  });
});

closeButtons.forEach(function(closeButton, index) {
  closeButton.addEventListener("click", function() {
    popups[index].style.display = "none";
  });
});


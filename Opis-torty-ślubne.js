function redirectToCiachownia() {
  window.open("index.html", "_blank");
}



document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".header");
  
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
  });




  

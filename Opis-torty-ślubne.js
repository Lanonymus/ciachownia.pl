function redirectToCiachownia() {
  window.open("Ciachownia.html", "_blank");
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




  document.addEventListener('DOMContentLoaded', function() {
    // Get all your navigation links
    const navLinks = document.querySelectorAll('.navbar a');
  
    // Add click event listener to each link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Prevent the default link behavior
        
  
        // Remove the 'active' class from all links
        navLinks.forEach(function(innerLink) {
          innerLink.classList.remove('active');
        });
  
        // Add the 'active' class to the clicked link
        link.classList.add('active');
      });
    });
  });



  var swiper = new Swiper(".blogs-row", {
    loop:true,
    spaceBetween: 30,
    centeredSlides:true,
    /*autoplay:{
        delay:9500,
        disableOnInteraction:false
    },
    */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextEl :".swiper-button-next",
        prevEl :".swiper-button-prev",
    
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });


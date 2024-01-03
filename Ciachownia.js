function redirectToCiachownia() {
  window.open("Opis-torty-ślubne.html","_blank");
}



function toggleCard1() {
  const card = document.getElementById('card1');
  card.classList.toggle('flipped');
}

function toggleCard2() {
  const card = document.getElementById('card2');
  card.classList.toggle('flipped');
}

function toggleCard3() {
  const card = document.getElementById('card3');
  card.classList.toggle('flipped');
}

function toggleCard4() {
  const card = document.getElementById('card4');
  card.classList.toggle('flipped');
}






//BOX-SHADOW ACTIVE ON

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


//PINK ACTIVE HEADER BUTTONS

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


//LOCOMOTIVE SCROLL + HEADER SCROLLED FUTURE

document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.querySelector('[data-scroll-container]');
  const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      multiplier: 0.5,
      // Other options...
  });

  // Handle navigation clicks
  document.querySelectorAll('.navbar a, .home-btn a, .box a').forEach(element => {
      element.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1); // Remove the '#'
          const targetElement = document.getElementById(targetId); // Targets the element

          scroll.scrollTo(targetElement);
      });
  });

  // Handle header scroll behavior
  scroll.on('scroll', function (obj) {
      const header = document.querySelector('.header');
      if (obj.scroll.y > 0) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
});









let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');

}




let sectionLinks = document.querySelectorAll('.home, .product, .blogs, .review, #Location, #contact, .newsletter');

sectionLinks.forEach(section => {
    section.onclick = () => {
        document.querySelector('.navbar').classList.remove('active');
    };
});






let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}










/*

document.addEventListener('click', function (event) {
  var navbar = document.querySelectorAll('.header .navbar');
  var sections = document.querySelectorAll('section');

  if (sections.contains(event.target)) {
      // Clicked inside the navbar
      navbar.forEach(function (navbar) {
          navbar.style.display = 'none';
      });
  }
});



*/



var swiper = new Swiper('.product-row', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 60,
  centeredSlides: false,  // Set to false
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
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

  var swiper = new Swiper(".review-row", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 30,
    centeredSlides:false,
    /*autoplay:{
        delay:9500,
        disableOnInteraction:false
    },
    */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },

    },
  });


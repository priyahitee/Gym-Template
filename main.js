const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute('class', isOpen ? "ri-close-line" : "ri-menu-3-line");
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
})

// Swiper carousel plugin pagination
var swiper = new Swiper(".swiper", {
    spaceBetween: 10,
     effect: 'slide',
     speed: 1000, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 // Add smooth scrolling to all links
$(document).ready(function(){
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll && The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  // ScrollReveal is a JavaScript library for easily animating elements as they enter/leave the viewport. 
  const scrollRevealOption = {
    distance: "100px",
    origin: "top",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 800,
  });

  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1200,
  });

  ScrollReveal().reveal(".header__content .header__btn", {
    ...scrollRevealOption,
    delay: 1600,
  });

  ScrollReveal().reveal(".about__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".trainer__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".membership__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".footer__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  // Loadmore blog__cards feature using jquery
  $(document).ready(function(){
    // Hide all blog cards except the first 4
    $(".blog__card").slice(4).hide();
  
    // When the "Load More" button is clicked
    $("#loadMoreBtn").on("click", function(e){
      e.preventDefault();
  
      // Select the next 4 hidden blog cards and slide them down
      $(".blog__card:hidden").slice(0, 4).slideDown();
  
      // If there are no more hidden blog cards, update the button text
      if($(".blog__card:hidden").length === 0) {
        $("#loadMoreBtn").text("No More Content");
      }
    });
  });










  
  
  
  

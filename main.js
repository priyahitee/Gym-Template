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
$(document).ready(function() {
  var blog__cardsToShow = 4; // Initial number of blog__cards to show
  
  function updateblog__cardsVisibility() {
    $(".blog__card").removeClass("hidden");
    $(".blog__card:gt(" + (blog__cardsToShow - 1) + ")").addClass("hidden");
  }

  $(window).on("resize", function() {
    var windowWidth = $(window).width();
    if (windowWidth < 768) {
      blog__cardsToShow = 2; // Adjust Default the number of blog__cards to show for smaller screens
    } else if (windowWidth < 992) {
      blog__cardsToShow = 4; // Adjust Default the number of blog__cards to show for medium screens
    } else {
      blog__cardsToShow = 4; // Default number of blog__cards to show for larger screens
    }
    updateblog__cardsVisibility();
  }).trigger("resize");

  $("#loadMoreBtn").on("click", function() {
    $(".blog__card.hidden").removeClass("hidden");
    $(this).hide(); // Hide the load more button after all blog__cards are loaded
  });
});











  
  
  
  

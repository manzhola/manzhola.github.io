$('.reviews__slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,  
    infinite: false,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          dots: true,
          slidesToShow: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="img/reviews/left-arrow.png" class="reviews__arrow_left" alt="left-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/reviews/right-arrow.png" class="reviews__arrow_right" alt="right-arrow"></button>',
    
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.promo__menu'),
  menuItem = document.querySelectorAll('.promo__item'),
  hamburger = document.querySelector('.hamburger'),
  overlay = document.querySelector('.promo__menu__overlay');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('promo__menu_active');
    overlay.classList.toggle('promo__menu__overlay_active');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.toggle('promo__menu__overlay_active');
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('promo__menu_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('promo__menu_active');
      overlay.classList.toggle('promo__menu__overlay_active');
    })
  })

})

$(window).scroll(function() {
  if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
  } else {
      $('.pageup').fadeOut();
  }
});

$("a[href^='#']").click(function() {
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

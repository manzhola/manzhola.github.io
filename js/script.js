$(document).ready(function(){
    const humburger = document.querySelector('.humburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close'),
        overlay = document.querySelector('.menu__overlay');
        scrollWidth = document.documentElement.scrollWidth;

    humburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    const counters = document.querySelectorAll(".skills__progress-percent"),
        lines = document.querySelectorAll(".skills__progress-line span");

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });
    
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 760) {
            $('.humburger span').fadeIn('slow').css('background-color', 'black');
        } else {
            $('.humburger span').fadeIn('slow').css('background-color', 'white');
        }
    });

    
    $('#contacts-validation form').validate({
        rules:{
            name: {
                required: true,
                minlength: 2
            },
            checkbox: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите своё имя",
                minlength: jQuery.validator.format("Нужно ввести {0} или больше символов!")
            },
            checkbox: "Пожалуйста, согласитесь с политикой конфиденциальности",
            email: {
                required: "Пожалуйста, введите вашу почту",
                email: "Не правильно введён адрес почты"
            }
        }
    });

    $('form').submit(function(e) {
        e.preventDefault(); // отключаем перезагрузку страницы после отправки
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 700) {
            $('.pageup').fadeIn();
        } 
        else {
        $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

});
$(function() {

//sticky menu

    $(function() {
        var menuPosition = $('nav').offset().top;

        $(window).scroll(function() {
            if ($(window).scrollTop() > menuPosition) {
                // $('.sticky').css({position: 'fixed', top: '0px', float: 'right'});
                $('nav').addClass("sticky");
            } else {
                $('nav').removeClass("sticky");
            }
        });
    });

//smooth scroll
    $(document).on('click', 'a', function(event) {
        event.preventDefault();
        // var menuElem = $(".main-nav").find("li");
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

//burger menu

    $(".burger-menu").on('click', function(){

        $(".mobile-menu").slideToggle(400);

    });

//text boxes

    var buttons = $(".text-button");
    var allTextBoxes = $(".inner-textbox");
    var textBox1 = $(".first-box");
    var textBox2 = $(".second-box");
    var textBox3 = $(".third-box");
    var textBox4 = $(".fourth-box");

    buttons.on("click", function(){

        if ($(this).hasClass("box-button1")) {
            allTextBoxes.hide();
            textBox1.show(300);
            buttons.removeClass("clicked-box");
            $(this).addClass("clicked-box");

        }else if ($(this).hasClass("box-button2")) {
            allTextBoxes.hide();
            textBox2.toggle(300);
            buttons.removeClass("clicked-box");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("box-button3")) {
            allTextBoxes.hide();
            textBox3.show(300);
            buttons.removeClass("clicked-box");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("phone-button1")) {
            allTextBoxes.hide();
            textBox1.show(300);
            buttons.removeClass("clicked-box");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("box-button6")) {
            allTextBoxes.hide();
            textBox4.show(300);
            buttons.removeClass("clicked-box");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("box-button4")) {
            allTextBoxes.hide();
            textBox2.show(300);
            buttons.removeClass("clicked-box");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("box-button5")) {
            allTextBoxes.hide();
            textBox3.show(300);
            buttons.removeClass("clicked-box");
            $(this).addClass("clicked-box");
        }


    });
});

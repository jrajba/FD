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
            buttons.removeClass("clicked-tablet2 clicked-tablet");
            $(this).addClass("clicked-tablet2");
            $(this).addClass("box-button11");
            buttons.removeClass("clicked-box box-button22 box-button33 box-button66");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("box-button2")) {
            allTextBoxes.hide();
            textBox2.toggle(300);
            buttons.removeClass("clicked-tablet2 clicked-tablet");
            $(this).addClass("clicked-tablet2");
            $(this).addClass("box-button22");
            buttons.removeClass("clicked-box box-button11 box-button33 box-button66");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("box-button3")) {
            allTextBoxes.hide();
            textBox3.show(300);
            buttons.removeClass("clicked-tablet clicked-tablet2");
            $(this).addClass("clicked-tablet");
            $(this).addClass("box-button33");
            buttons.removeClass("clicked-box box-button11 box-button22 box-button66");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("phone-button1")) {
            allTextBoxes.hide();
            buttons.removeClass("clicked-phone");
            $(this).addClass("clicked-phone");
            textBox1.show(300);
            buttons.removeClass("clicked-box");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("box-button6")) {
            allTextBoxes.hide();
            buttons.removeClass("clicked-phone");
            $(this).addClass("clicked-phone");
            buttons.removeClass("clicked-tablet clicked-tablet2");
            $(this).addClass("clicked-tablet");
            textBox4.show(300);
            $(this).addClass("box-button66");
            buttons.removeClass("clicked-box box-button11 box-button33 box-button22");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("box-button4")) {
            allTextBoxes.hide();
            buttons.removeClass("clicked-phone");
            $(this).addClass("clicked-phone");
            textBox2.show(300);
            buttons.removeClass("clicked-box");
            $(this).addClass("clicked-box");
        }else if ($(this).hasClass("box-button5")) {
            allTextBoxes.hide();
            buttons.removeClass("clicked-phone");
            $(this).addClass("clicked-phone");
            textBox3.show(300);
            buttons.removeClass("clicked-box");
            $(this).addClass("clicked-box");
        }


    });
});

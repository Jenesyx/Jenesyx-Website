function onload()
{
    var typed = new Typed('#typing', {
        strings:
            [
                "Jenesyx", "Bidkhori", "Website",
                "Your friend", "Your family",
                "is just kidding"
            ],
        typeSpeed: 120,
        loop: true,
        startDelay: 2200,
        backSpeed: 60
    });

    $('.example-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        autoplay: true,
        centerMode: false,
        dots: true,
    });
}

function banana(t)
{
    if (t == 'in')
    {
        document.getElementById('circleone').style.background = "#3b4382"
        document.getElementById('circletwo').style.background = "#ffff01"
        return
    }

    else (t == 'out')
    {
        document.getElementById('circleone').style.background = "#ffff01"
        document.getElementById('circletwo').style.background = "#3b4382"
        return
    }
}
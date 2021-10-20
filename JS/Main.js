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

function mooz(t)
{
    if (t == 'in')
    {
        document.getElementById('triangle1').style.opacity= "1"
        document.getElementById('triangle1').style.transform= "rotate(65deg)"
        return
    }

    else (t == 'out')
    {
        document.getElementById('triangle1').style.opacity= "0"
        document.getElementById('triangle1').style.transform= "rotate(0deg)"
        return
    }
}

function sib(t)
{
    if (t == 'in')
    {
        document.getElementById('triangle2').style.opacity= "1"
        document.getElementById('triangle2').style.transform= "rotate(65deg)"
        return
    }

    else (t == 'out')
    {
        document.getElementById('triangle2').style.opacity= "0"
        document.getElementById('triangle2').style.transform= "rotate(0deg)"
        return
    }
}

function golabi(t)
{
    if (t == 'in')
    {
        document.getElementById('triangle3').style.opacity= "1"
        document.getElementById('triangle3').style.transform= "rotate(65deg)"
        return
    }

    else (t == 'out')
    {
        document.getElementById('triangle3').style.opacity= "0"
        document.getElementById('triangle3').style.transform= "rotate(0deg)"
        return
    }
}

function havij(t)
{
    if (t == 'in')
    {
        document.getElementById('triangle4').style.opacity= "1"
        document.getElementById('triangle4').style.transform= "rotate(65deg)"
        return
    }

    else (t == 'out')
    {
        document.getElementById('triangle4').style.opacity= "0"
        document.getElementById('triangle4').style.transform= "rotate(0deg)"
        return
    }
}
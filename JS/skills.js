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

function sosis(t)
{
    if (t == 'esport')
    {
        document.getElementById('esport-text').style.display= "block"
        document.getElementById('yt-text').style.display= "none"
        document.getElementById('develope-text').style.display= "none"
        document.getElementById('design-text').style.display= "none"
    }

    if (t == 'yttwitch')
    {
        document.getElementById('esport-text').style.display= "none"
        document.getElementById('yt-text').style.display= "block"
        document.getElementById('develope-text').style.display= "none"
        document.getElementById('design-text').style.display= "none"
    }

    if (t == 'developing')
    {
        document.getElementById('esport-text').style.display= "none"
        document.getElementById('yt-text').style.display= "none"
        document.getElementById('develope-text').style.display= "block"
        document.getElementById('design-text').style.display= "none"
    }

    if (t == 'graphicdesign')
    {
        document.getElementById('esport-text').style.display= "none"
        document.getElementById('yt-text').style.display= "none"
        document.getElementById('develope-text').style.display= "none"
        document.getElementById('design-text').style.display= "block"
    }
}
let typed = new Typed('.auto-input', {
    strings: [
        "About Me"
    ],

    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});

function fun_name()
{
    var elem = document.getElementById("idDiv");
    elem.animate([
        {
            color: 'blue'
        },
        {
            color: 'red'
        }],
        {
            duration: 5000
        });
}

$(document).ready(function(){
    $(window).scroll(function(){
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        })
        });
    });
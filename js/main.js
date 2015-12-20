// Dean Attali / Beautiful Jekyll 2015

// Shorten the navbar after scrolling a little bit down
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("top-nav-short");
    } else {
        $(".navbar").removeClass("top-nav-short");
    }
});

// On mobile, hide the avatar when expanding the navbar menu
$('#main-navbar').on('show.bs.collapse', function () {
  $(".navbar").addClass("top-nav-expanded");
})
$('#main-navbar').on('hidden.bs.collapse', function () {
  $(".navbar").removeClass("top-nav-expanded");
})

$(function(){

	 $('a.ancla').click(function(e){
        e.preventDefault();
        enlace  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(enlace).offset().top
        }, 1000);
    });
    $('a.arriba').click(function(e){
        e.preventDefault();
        volver  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(volver).offset().top
        }, 1000);
    });
});
// 2fc73a3a967e97599c9763d05e564189

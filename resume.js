$('td.core-skills').mouseover(function () {
  $(this).addClass('active');
});
$('td.core-skills').mouseleave(function () {
  $(this).removeClass('active');
});

window.addEventListener("scroll", function() {
    if (window.scrollY < 200) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
},false);


window.addEventListener("scroll", function() {
    if (window.scrollY < 200) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
},false);

$('#carouselExampleIndicators').carousel();
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var elementHeight = $(this).height();
    var alpha = Math.min(1-((elementHeight/2 - scrollTop) / (elementHeight/2)), 1);
    console.log(alpha);
    $('.navbar').css('background-color', 'rgba(10,10,10,' + alpha + ')');

});

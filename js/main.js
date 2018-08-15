$('#carouselExampleIndicators').carousel();
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var elementHeight = $(this).height();
    var searchField = $('.search-field');
    var searchBarPos = searchField.offset().top;
    var alpha = Math.min(1-((elementHeight/2 - scrollTop) / (elementHeight/2)), 1);
    console.log("scroll is " + scrollTop + " and bar is at " + searchBarPos);
    var navBarHeight = $('.navbar').height();
    $('.navbar').css('background-color', 'rgba(10,10,10,' + alpha + ')');
    if (scrollTop + navBarHeight > searchBarPos) {
        searchField.css('width', '80%');
        searchField.css('height', ''+navBarHeight*0.7);
        searchField.css('top', '0');

        searchField[0].placeholder = '';
        searchField.appendTo($('.nav-search'));
    }
});

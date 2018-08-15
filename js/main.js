$('#carouselExampleIndicators').carousel();
var searchField = $('.search-field');
const searchBarPos = searchField.offset().top;
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var elementHeight = $(this).height();
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
    if (scrollTop + navBarHeight < searchBarPos && searchField[0].placeholder==="") {
        searchField.css('width', '100%');
        searchField.css('height', '2em');
        searchField.css('top', '6.5em');

        searchField[0].placeholder = 'find events';
        searchField.appendTo($('.search-bar'));
    }
});

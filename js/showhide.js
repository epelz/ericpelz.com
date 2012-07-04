// this tells jquery to run the function below once the DOM is read
$(document).ready(function() {

// choose text for the show/hide link
var showText="show more";
var hideText="show less";

// append show/hide links to the element directly preceding the element with a class of "toggle"
$(".toggle").prev().append(' (<a href="#" class="toggleLink">'+showText+'</a> &darr;) ');

// hide all of the elements with a class of 'toggle'
$('.toggle').hide();

// capture clicks on the toggle links
$('a.toggleLink').click(function() {

// change the link depending on whether the element is shown or hidden
if ($(this).html()==showText) {
$(this).html(hideText);
}
else {
$(this).html(showText);
}

// toggle the display
$(this).parent().next('.toggle').toggle('slow');

// return false so any link destination is not followed
return false;

});
});
/* 
The ready function
Anything inside the curly brackets will only run once the
DOM is fully loaded and once the HTML is fully rendered
*/
$(document).ready(function() {
    // $("tr:odd").addClass("odd");
    // $("tr:even").addClass("even");
    // $("h2").css("text-decoration", "underline"); //Underlines all <h2> elements
    // $("ul").css("border", "solid 1px #ccc"); //Adds a border to all lists
    //Below 2 lines alternative to the above 2 lines if the classes are added to style
    $("h2").addclass("underline"); //Underlines all <h2> elements
    $("ul").addclass("border"); //Adds a border to all lists
    //Classes may also be removed from elements
    // $("h2").removeclass("underline"); //Remove underlines all <h2> elements
    // $("ul").removeclass("border"); //Remove border to all lists
});
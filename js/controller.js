/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {

    console.log("Page Controller reporting for duty.");
    // alert("Thanks");

    // Activates the Carousel
    $('.carousel').carousel({
        interval: 3000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })


})
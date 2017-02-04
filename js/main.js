$(document).ready(function(){
    $('.slider').slider();
    $('.carousel.carousel-slider').carousel({fullWidth: true})
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('ul.tabs').tabs();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
});
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 16});
  var geocoder = new google.maps.Geocoder;
  geocoder.geocode({'address': 'Ricaldone'}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      window.alert('Geocode was not successful for the following reason: ' +
          status);
    }
  });
}
window.fbAsyncInit = function() {
    FB.init({
      appId      : '113362692514424',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "js/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

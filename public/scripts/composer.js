//Logic for scroll to create new tweet button 
// (red bottom corner on scroll)

$(document).ready(function() {

  $(window).scroll(function (event) {
    const scroll = $(window).scrollTop();
    if (scroll > 250) {
      $( 'nav' ).removeClass('blue');
      $( 'nav' ).addClass('noBGColor');
      $( '#compose-tweet-btn' ).removeClass('flex-container-col');
      $( '#compose-tweet-btn' ).addClass('hide');
      $( '#scroll-to-new-tweet' ).fadeIn();
    } else if (scroll < 250) {
      $( 'nav' ).addClass('blue');
      $( 'nav' ).removeClass('noBGColor');
      $( '#compose-tweet-btn' ).addClass('flex-container-col');
      $( '#compose-tweet-btn' ).removeClass('hide');
      $( '#scroll-to-new-tweet' ).fadeOut();
    }
  });
  
});
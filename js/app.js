const showText = () => {
  $('.technologies .item').animate({
    perspective: '1000px'
  }, 3000);
}

/*ScrollTop*/

$(window).scroll(function(){
  scrollFunction();
});

function scrollFunction() {
  var gap = $(window).outerHeight();
  console.log(gap, $(window).scrollTop())
  if ($(window).scrollTop() > gap) {
    $('#scrollTopBtn').fadeIn(200);
  } else {
    $('#scrollTopBtn').fadeOut(200);
  }
}

$('#scrollTopBtn').click(function() {
  $('html, body').animate(
    {scrollTop: 0},
    'slow'
  );
});

$(document).ready(() => {
  showText();
})


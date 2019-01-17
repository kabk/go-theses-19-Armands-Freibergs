// Navbar Scroll-based Active CLass
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var p1s = $('#page1').offset().top;
  var p2s = $('#page2').offset().top - 50;
  var p3s = $('#page3').offset().top - 50;
  var p4s = $('#page4').offset().top - 50;
  var p5s = $('#page5').offset().top - 50;
  var p6s = $('#page6').offset().top - 50;
  var p7s = $('#page7').offset().top - 50;

  if (scroll >= p1s) {
    $('.navItem').removeClass("active");
    $('#nav1').addClass("active");
  }
  if (scroll >= p2s) {
    $('.navItem').removeClass("active");
    $('#nav2').addClass("active");
  }
  if (scroll >= p3s) {
    $('.navItem').removeClass("active");
    $('#nav3').addClass("active");
  }
  if (scroll >= p4s) {
    $('.navItem').removeClass("active");
    $('#nav4').addClass("active");
  }
  if (scroll >= p5s) {
    $('.navItem').removeClass("active");
    $('#nav5').addClass("active");
  }
  if (scroll >= p6s) {
    $('.navItem').removeClass("active");
    $('#nav6').addClass("active");
  }
  if (scroll >= p7s) {
    $('.navItem').removeClass("active");
    $('#nav7').addClass("active");
  }
});

// Dynamic Hover Show/Hide
$('.initHover').mouseover(function() {
  var myID = '#' + $(this).attr('id');
  var newID = myID + "HOV";
  $(newID).fadeIn();
  $(myID).hide();
});

$('.finHover').mouseout(function() {
  var myID = '#' + $(this).attr('id');
  var newID = myID.slice(0, -3);
  $(newID).fadeIn();
  $(myID).hide();
});

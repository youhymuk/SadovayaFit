$(function () {

  //Menu opener hamburger
  $('.menu-btn').click(function () {
    $('.unfold').toggleClass('d-none');
  });

  $('.menu__link').click(function () {
    $('.unfold').toggleClass('d-none');
  })

  $('.qa__plus').click(function () {
    $(this).parent().next().toggleClass('d-none');

  })

  //Slider
  $('.slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    adaptiveHeight: true,
    variableWidth: true,
    // respondTo:'window',
    mobileFirst: true,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
  });

  // Show .info
  $('.info-btn').click(function () {
    $('.info').toggleClass('d-none');
  })
});

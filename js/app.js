//change content menu - options
$('.menu-show').click(function (e) {

  e.preventDefault();

  var target = $(this).data('target');
  console.log(target + " is the section to show");

  showBlock(target);

});

function clearblocks() {
  $('.content').fadeOut("slow");
}

function showBlock(block) {
  var $block = $(block);
  if ($block.css("display")== 'none') {
    clearblocks();
    $block.fadeOut(0).delay(500).fadeIn("slow");
  }
}

//acordion-content toggle
$('.acordion-content .card-header').click(function () {
  var icon = $(this).find('i.fa');
  var content = $(this).parent().find('.card-block');
  if (content.css('display')=='none') {
    icon.removeClass('fa-chevron-down');
    icon.addClass('fa-chevron-up');
    content.slideDown("slow");
  } else {
    icon.removeClass('fa-chevron-up');
    icon.addClass('fa-chevron-down');
    content.slideUp("slow");
  }
})

//Slide slick
$(document).ready(function(){
  $('.gallery-slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
  $('.gallery-slide-social').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
  //sticky
  var $header = $("header");

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $header.toggleClass('clone', (fromTop > 200));
    $('body').toggleClass("down", (fromTop > 200));
  });
});


//auto modal
$(function () {
  $('#automodal').modal('show');
})

// reading pop up
$(function () {
  var $open = $('#reading-show');
  var $reading = $('#readingpop');
  var $close = $reading.find('.close');

  $open.click(function () {
    $reading.fadeIn('slow');
  })

  $close.click(function () {
    $reading.fadeOut('slow');
  })

})

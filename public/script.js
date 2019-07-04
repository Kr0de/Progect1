document.addEventListener("DOMContentLoaded", function(){
$('#menu').on('click', function(){
if($('.menu__hover').css('display') == 'none'){
  $('.menu__hover').show('slow');
} else {
  $('.menu__hover').hide('slow');
}
  $("body").toggleClass("body__click");
});

$('.social__arrow').on('click', function(){
  if(  $('.social').hasClass('social') ){
    $('.social').addClass('social__hover');
    $('.social').removeClass('social');
  } else {
    $('.social__hover').addClass('social');
    $('.social__hover').removeClass('social__hover');
  }
});
$(window).resize(function(){ //Фикс косяка с изменением окна браузера
  let reg = /\d{3,4}/
  if($("body").css('width').match(reg)[0] >= 800){
    $('.social__hover').addClass('social');
    $('.social__hover').removeClass('social__hover');
  }
});
$(window).resize();


let
    sliderIndex = 1,
    next = document.querySelector('.slider__arrow-top'),
    prev = document.querySelector('.slider__arrow-bot'),
    slider = document.querySelectorAll('.banner__bg__img');
    box = document.querySelectorAll('.box__img');
       console.log(box);
      // box.css('background', 'red');
     // box.each((item) => console.log(box[item]));
     // box[0].attr('src', '../public/img/box1.png');
     //box.each((item) => box[item].attr('src', '../public/img/box1.png'));
    showSlides(sliderIndex);

    function showSlides(n){
      if(n > slider.length){
           sliderIndex = 1;
          }
      if(n < 1){
           sliderIndex = slider.length;
           }

       box.forEach((item) => item.classList.remove('box__active'));
      slider.forEach((item) => item.style.display = 'none');

      box[sliderIndex-1].classList.add('box__active');
      slider[sliderIndex-1].style.display = 'block';
    }

    function plusSlides(n){
        showSlides(sliderIndex += n);
    }

    function currentSlides(n){
        showSlides(sliderIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });



let form = document.querySelector('.signUp__form'),
    input = form.getElementsByTagName('input');

    input[0].addEventListener('change', function(){
      input[0].required = false;
    })


  form.addEventListener('submit', function(e){

    e.preventDefault();
    let request = new XMLHttpRequest();
    request.open("POST", "server.js");
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    let formData = new FormData(form);
    request.send(formData);
  });

//let form1 = $('.signUp__form');
//
//   form.on('submit', function(event){
//     event.preventDefault();
//      var data = form.serialize();
//
//     $.ajax({
//       url: "index",
//       processData: false,
//       contentType: false,
//       type: 'POST',
//       data: JSON.stringify(data),
//       success: function() {
//             console.log('Success upload');
//         }
//     });
//   });

// Comments

let windowWidth = document.documentElement.clientWidth/2 - parseFloat($('.post__comment__window').css('width'))/2;
$('.post__comment').on('click', () =>{
  $('.post__comment__window').fadeToggle('slow');
  $('.post__comment__window').css('left', `${windowWidth}px`);
  $('.post__comment__window').css('top', `${$(document).scrollTop()}px`);
  //$('body').toggleClass('body__click');
  let clickH = $(document).scrollTop();
  console.log(clickH);
});
console.log(parseFloat($('.post__comment__window').css('width'))/2);

$('.close').on('click', function(){
  $('.post__comment__window').fadeToggle('slow');
});

});

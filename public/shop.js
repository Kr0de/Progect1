document.addEventListener('DOMContentLoaded',function(){

	let mainLi = document.querySelectorAll('.shop__menu>ul>li');
	mainLi.forEach((item) => {item.addEventListener('click', function(event){
		let childElem = event.target.nextSibling.nextSibling;
		childElem.classList.toggle('shop__menu__active');
		});
	});



	$('.shop__card').on('click', function(){
		$('.card__floatUp').toggleClass('active');
		// let myWidth = $(document).width()/2;
		// $('.card__floatUp').css('margin-left', `${myWidth}px`);
		let scrollHeight = $(window).scrollTop();
		$('.card__floatUp').css('top', `${scrollHeight}px`);
		let myHeight = $(document).height();
		$('.card__floatUp__opacity').css('height', `${myHeight}px`);
		$("body").toggleClass('overflow')
	});

	function getToday(){
		let date = new Date();
		let day = date.getDate();
		let mounth = date.getMonth();
		let number = document.querySelectorAll('.number');
		let mounthDOM = document.querySelectorAll('.mounth h3');

		number.forEach((item) => {
			item.classList.remove('active');
			if(item.textContent == day){
				item.classList.add('active');
			}
		});
		mounthDOM.forEach((item, indx) => {
			item.style.display = 'none';
			if(indx == mounth){
				item.style.display = 'block';
			}
		});
	}

	getToday();


	function subSlider(){
		let slide = document.querySelectorAll('.slide');
		let sub__slide = document.querySelectorAll('.sub__slide');
		let slideIndex = 0;

		sub__slide.forEach((item, indx) => {
			item.onclick = ()=>{
				slide.forEach((item) => {item.style.display = 'none';});
				slide[indx].style.display = 'block';
			}
		});
	}
	subSlider();
});
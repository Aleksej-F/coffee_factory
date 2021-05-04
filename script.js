function getRandom(anyArray) {
  var randomNumber =Math.floor(Math.random()*anyArray.length) ;
  var  randomElement = anyArray[randomNumber];
  return randomElement;
}




var cards = document.getElementsByClassName('card');


window.addEventListener('scroll', function () {
	var scrollY =window.pageYOffset;
	console.log(scrollY) ;

	if ((scrollY>500) && (scrollY<1300)) {
		let ter1 = document.getElementsByClassName('s2-card-image');
		ter1[0].classList.add('_11');
		ter1[1].classList.add('_22');
		ter1[2].classList.add('_33');
		ter1[3].classList.add('_44');
	};

	if (scrollY>1400 || scrollY<350) {
		let ter1 = document.getElementsByClassName('s2-card-image');
		ter1[0].classList.remove('_11');
		ter1[1].classList.remove('_22');
		ter1[2].classList.remove('_33');
		ter1[3].classList.remove('_44');
	};

	if ((scrollY>2398) && (scrollY<3220)) {
		let ter1 = document.getElementsByClassName('text-block-5');
		ter1[0].classList.add('tb5_1');
		ter1[1].classList.add('tb5_2');
		ter1[2].classList.add('tb5_3');
		ter1[3].classList.add('tb5_4');
	};

	if (scrollY>3400 || scrollY<2188) {
		let ter1 = document.getElementsByClassName('text-block-5');
		ter1[0].classList.remove('tb5_1');
		ter1[1].classList.remove('tb5_2');
		ter1[2].classList.remove('tb5_3');
		ter1[3].classList.remove('tb5_4');
	};
	if ((scrollY>4524) ) {
		let ter1 = document.getElementsByClassName('image-2');
		ter1[0].classList.add('s9_i_1');
		
	};
	if (scrollY<4399) {
		let ter1 = document.getElementsByClassName('image-2');
		ter1[0].classList.remove('s9_i_1');
		
	};
});
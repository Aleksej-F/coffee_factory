
function getRandom(anyArray) {
  var randomNumber =Math.floor(Math.random()*anyArray.length) ;
  var  randomElement = anyArray[randomNumber];
  return randomElement;
}


document.querySelector('.header_burder').addEventListener('click', function () {
	console.log("клик бургер")
	let burMenu = document.querySelector('.menu-main');
	let burBurder = document.querySelector('.header_burder');
	burMenu.classList.toggle("active");
	burBurder.classList.toggle("active");
});

document.querySelector('.menu-main').addEventListener('click', function () {
	console.log("клик меню")
	let burMenu = document.querySelector('.menu-main');
	let burBurder = document.querySelector('.header_burder');
	burMenu.classList.remove("active");
	burBurder.classList.remove("active");
});


var cards = document.getElementsByClassName('card');


window.addEventListener('scroll', function () {
	var scrollY =window.pageYOffset;
	//console.log(scrollY ) ;
	//console.log( window.innerWidth ) ;
	if (((scrollY>500) && (scrollY<1300) && (window.innerWidth>991)) ||
		((scrollY>500) && (scrollY<1800) && (window.innerWidth<991) && (window.innerWidth>767)) ||
		((scrollY>300) && (scrollY<1400) && (window.innerWidth<767) && (window.innerWidth>479)) ||
		((scrollY>500) && (scrollY<2400) && (window.innerWidth<479))
		){
		let ter1 = document.getElementsByClassName('s2-card-image');
		ter1[0].classList.add('_11');
		ter1[1].classList.add('_22');
		ter1[2].classList.add('_33');
		ter1[3].classList.add('_44');
	};

	if ((((scrollY > 1594) || (scrollY < 350))  && (window.innerWidth > 991)) ||
		(((scrollY > 1600) || (scrollY < 350))  && (window.innerWidth < 991) && (window.innerWidth > 767)) ||
		(((scrollY > 1700) || (scrollY < 200))  && (window.innerWidth < 767) && (window.innerWidth > 479)) ||
		(((scrollY > 2300) || (scrollY < 350)) && (window.innerWidth < 479))
	) {
		let ter1 = document.getElementsByClassName('s2-card-image');
		ter1[0].classList.remove('_11');
		ter1[1].classList.remove('_22');
		ter1[2].classList.remove('_33');
		ter1[3].classList.remove('_44');
	};

	if ((((scrollY > 2398) && (scrollY<3220)) && (window.innerWidth>991)) ||
		(((scrollY > 2640) && (scrollY<4140)) && (window.innerWidth<991) && (window.innerWidth>767)) ||
		(((scrollY > 3475) && (scrollY < 4575))  && (window.innerWidth < 767) && (window.innerWidth > 479)) ||
		(((scrollY > 4000) && (scrollY<5480)) && (window.innerWidth<479)) 
	) {
		let ter1 = document.getElementsByClassName('text-block-5');
		ter1[0].classList.add('tb5_1');
		ter1[1].classList.add('tb5_2');
		ter1[2].classList.add('tb5_3');
		ter1[3].classList.add('tb5_4');
	};

	if ((((scrollY > 3400) || (scrollY < 2188))  && (window.innerWidth > 991)) ||
		(((scrollY > 4140) || (scrollY < 2640))  && (window.innerWidth < 991) && (window.innerWidth > 767)) ||
		(((scrollY > 4675) || (scrollY < 3175))  && ((window.innerWidth < 767) && (window.innerWidth > 479))) ||
		(((scrollY > 6000) || (scrollY < 4000)) && (window.innerWidth < 479))
	) {
		let ter1 = document.getElementsByClassName('text-block-5');
		ter1[0].classList.remove('tb5_1');
		ter1[1].classList.remove('tb5_2');
		ter1[2].classList.remove('tb5_3');
		ter1[3].classList.remove('tb5_4');
	};

	if (((scrollY>4524) && (window.innerWidth>991)) || 
		((scrollY>5057) && ((window.innerWidth<991) && (window.innerWidth>767))) || 
		((scrollY>6057) && ((window.innerWidth<767)&& (window.innerWidth>479))) || 
		((scrollY>7500) && ((window.innerWidth<479)))
	) {
		let ter1 = document.getElementsByClassName('image-2');
		ter1[0].classList.add('s9_i_1');
	};

	if (((scrollY<4399) && (window.innerWidth>991)) ||
		((scrollY<5157) && ((window.innerWidth<991) && (window.innerWidth>767))) ||
		((scrollY<6149) && ((window.innerWidth<767) && (window.innerWidth>479))) || 
		((scrollY<7600) && ((window.innerWidth<479)))
	) {
		let ter1 = document.getElementsByClassName('image-2');
		ter1[0].classList.remove('s9_i_1');
	};
});
let date = new Date();

function createSlaider (e) { // отрисовка слайдера
	
	images.init();

	document.querySelector('.switch2').addEventListener('click', function () {
		images.clickNextLeftImage();
	});

	document.querySelector('.switch3').addEventListener('click', function () {
		images.clickNextRightImage();
	});

	document.querySelector('.slider-nav').addEventListener('click', function (e) {
		images.setNextImage(e);
	});
}

  // Объект слайдера
let images = {
	/* {int} Номер текущего изображения */
	currentIdx: {q:0, r:2, z:1},

	/* {HTMLDivElement[]} slides элементы слайдов */
	slides: [],
	slidesImg: [],
	slidesNav: [],
	
	/** Получаем все слайды и показываем первый слайд. */
	init() {
		console.time("walkIn");
		this.slides = document.querySelectorAll('.slider-item');
		this.slidesImg = document.querySelectorAll('.slider-img');
		this.slidesNav = document.querySelectorAll('.circle');
		
		this.showImageWithCurrentIdx(this.currentIdx.q);
		this.slideNavActive(this.currentIdx.q)
		this.slidesImg[this.currentIdx.q].style.opacity = 1;
		this.showImageWithCurrentIdxScale()
	},

	/** Берем слайд с текущим индексом и убираем у него класс
	 * hidden-slide. */
	showImageWithCurrentIdx(e) {
		this.slides[e].classList.remove('hidden-slide');
	},
	// 
	showImageWithCurrentIdxScale(e) {
		this.slides[images.currentIdx.q].style.transform = 'scale(1.5)'; 
		this.slides[images.currentIdx.q].style.transition = "transform 10000ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s";
		let date1 = new Date();
		console.log('увеличение слайда', date1-date)
	},

	/** Видимому (текущему) слайду добавляем класс hidden-slide. */
	hideVisibleImage() {
		this.slides[this.currentIdx.r].classList.add("hidden-slide");
		this.slides[this.currentIdx.r].style.transition = "";
		this.slides[images.currentIdx.r].style.transform = 'scale(1)';
		this.slidesImg[this.currentIdx.r].style.transition = "";
		this.slidesImg[this.currentIdx.r].style.opacity = 1;
		
	},

    imageOpacity(e) {
		let date1 = new Date();
		console.log('opacity    ',date1 - date  )
		this.slidesImg[this.currentIdx.r].style.transition = "opacity 5000ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s";
		this.slidesImg[this.currentIdx.r].style.opacity = 0;
				
		this.showImageWithCurrentIdx(this.currentIdx.q)
		
		this.slidesImg[this.currentIdx.q].style.transition = "opacity 6000ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 3s";
		this.slidesImg[this.currentIdx.q].style.opacity = 1;
	},
	imageOpacityRemove(e) {
		this.slides[e].classList.Remove('item-opacity');
	},
    
	//  подсвечиваем первый кружок
	slideNavActive(e) {
		this.slidesNav[e].classList.add("circle-active");
	},
	
	slideNavActiveRemove(e) {
		this.slidesNav[e].classList.remove("circle-active");
	},

	/** Переключиться на предыдущее изображение. */
	clickNextLeftImage() {
		this.setNextLeftImage()
		this.animate()
	},

	clickNextRightImage() {
		this.setNextRightImage()
		this.animate()
	},
	
	/** Переключиться на предыдущее изображение. */
	setNextLeftImage() {
		this.currentIdx.r = this.currentIdx.q
		
		if (this.currentIdx.q == 0) {
			this.currentIdx.q = this.slides.length - 1;
		} else {
			this.currentIdx.q--;
		}
		
	//	console.log(this.currentIdx.q, this.currentIdx.r )
	},

	/** Переключиться на следующее изображение. */
	setNextRightImage() {
		this.currentIdx.r = this.currentIdx.q
		if (this.currentIdx.q == this.slides.length - 1) {
			this.currentIdx.q = 0;
		} else {
			this.currentIdx.q++;
		}
		//console.log(this.currentIdx.q, this.currentIdx.r )
	},

	/** Переключиться на изображение. */
	setNextImage(e) {
		
		this.currentIdx.r = this.currentIdx.q
		this.currentIdx.q = Number(e.target.dataset.n)
		
		//console.log(this.currentIdx.q, this.currentIdx.r )
		this.animate()//
	},

	animate() {
		//перекрашиваем кружочки
		this.slideNavActiveRemove(this.currentIdx.r)
		this.slideNavActive(this.currentIdx.q)
		
		const p =  new Promise((resolve, reject)=>{
			setTimeout(() => {
				this.imageOpacity()
				resolve()
			},100)
		})
		
		
		p.then(()=>{
			return new Promise((resolve, reject)=>{
				setTimeout(() => {
					
					this.currentIdx.z++
					this.slides[images.currentIdx.q].style.zIndex = this.currentIdx.z
					
					this.hideVisibleImage()
					
					console.log('скрыли пред слайд')
					resolve()
				},4000)	
			})
		}).then(()=>{
			return new Promise((resolve, reject)=>{
				setTimeout(() => {
					this.showImageWithCurrentIdxScale()
					
					
					resolve()
				},100)	
			})
		})
	}
	 
}

createSlaider ()

let timerId = setInterval(() => {
	let date1 = new Date();
	console.log('имитация клика',date1 - date  )
	images.setNextRightImage()
	images.animate()
}, 8000);
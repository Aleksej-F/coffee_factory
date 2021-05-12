
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

	if ((((scrollY>2398) && (scrollY<3220)) && (window.innerWidth>991)) ||
		(((scrollY>2640) && (scrollY<4140)) && (window.innerWidth<991) && (window.innerWidth>479)) ||
		(((scrollY>4000) && (scrollY<5480)) && (window.innerWidth<479)) 
	) {
		let ter1 = document.getElementsByClassName('text-block-5');
		ter1[0].classList.add('tb5_1');
		ter1[1].classList.add('tb5_2');
		ter1[2].classList.add('tb5_3');
		ter1[3].classList.add('tb5_4');
	};

	if ((((scrollY>3400) || (scrollY<2188))  && (window.innerWidth>991)) ||
		(((scrollY>4140) || (scrollY<2640))  && (window.innerWidth<991) && (window.innerWidth>479)) ||
		(((scrollY>6000) || (scrollY<4000)) && (window.innerWidth<479))
	) {
		let ter1 = document.getElementsByClassName('text-block-5');
		ter1[0].classList.remove('tb5_1');
		ter1[1].classList.remove('tb5_2');
		ter1[2].classList.remove('tb5_3');
		ter1[3].classList.remove('tb5_4');
	};
	if (((scrollY>4524) && (window.innerWidth>991)) || 
		((scrollY>5057) && ((window.innerWidth<991) && (window.innerWidth>767))) || 
		((scrollY>5057) && ((window.innerWidth<767)))
	
	) {
		let ter1 = document.getElementsByClassName('image-2');
		ter1[0].classList.add('s9_i_1');
		
	};
	if (((scrollY<4399) && (window.innerWidth>991)) ||
		((scrollY<5157) && ((window.innerWidth<991) && (window.innerWidth>767))) ||
		((scrollY<5226) && ((window.innerWidth<767)))
	) {
		let ter1 = document.getElementsByClassName('image-2');
		ter1[0].classList.remove('s9_i_1');
		
	};
});


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
	currentIdx: {q:0, z:1},

	/* {HTMLDivElement[]} slides элементы слайдов */
	slides: [],

	slidesNav: [],
	
	/** Получаем все слайды и показываем первый слайд. */
	init() {
		this.slides = document.querySelectorAll('.slider-item');
		this.slidesNav = document.querySelectorAll('.circle');
		
		this.showImageWithCurrentIdx(this.currentIdx.q);
		this.slideNavActive(this.currentIdx.q)
	},

	/** Берем слайд с текущим индексом и убираем у него класс
	 * hidden-slide. */
	showImageWithCurrentIdx(e) {
		this.slides[e].classList.remove('hidden-slide');
		
	},
	showImageWithCurrentIdxScale(e) {
		this.slides[e].classList.add('item-scale');
	},

	/** Видимому (текущему) слайду добавляем класс hidden-slide. */
	hideVisibleImage(e) {
		this.slides[e].classList.add("hidden-slide");
		//this.slides[e].classList.remove('item-scale');

	},
    imageOpacity(e) {
		this.slides[e].classList.add('item-opacity');
	},
	imageOpacityRemove(e) {
		this.slides[e].classList.Remove('item-opacity');
	},

	slideNavActive(e) {
		this.slidesNav[e].classList.add("circle-active");
	},
	slideNavActiveRemove(e) {
		this.slidesNav[e].classList.remove("circle-active");
	},

	/** Переключиться на предыдущее изображение. */
	clickNextLeftImage() {
		clearInterval(timerId)
		this.setNextLeftImage()
		animate()
	},

	clickNextRightImage() {
		clearInterval(timerId)
		this.setNextRightImage()
		animate()
	},

	setNextLeftImage() {
		
		if (this.currentIdx.q == 0) {
			this.currentIdx.q = this.slides.length - 1;
			
		} else {
			this.currentIdx.q--;
			
		}
		if (this.currentIdx.z == 0) {
			this.currentIdx.z = this.slides.length - 1;
			
		} else {
			this.currentIdx.z--;
			
		}
		
	},

	/** Переключиться на следующее изображение. */
	setNextRightImage() {
		
		if (this.currentIdx.q == this.slides.length - 1) {
			this.currentIdx.q = 0;
			
		} else {
			this.currentIdx.q++;
			
		}

		if (this.currentIdx.z == this.slides.length - 1) {
			this.currentIdx.z = 0;
			
		} else {
			this.currentIdx.z++;
			
		}
	},

	/** Переключиться на изображение. */
	setNextImage(e) {
		//console.log(e.target.dataset.n)
		clearInterval(timerId)
		
		
		this.currentIdx.q = e.target.dataset.n;
		if (this.currentIdx.q == this.slides.length - 1) {
			this.currentIdx.z = 0;
			
		} else {
			this.currentIdx.z = this.currentIdx.q + 1;
			
		}
		
		animate()
	},

	 
}

createSlaider ()
let z = 1
function animate() {
	const p =  new Promise((resolve, reject)=>{
		setTimeout(() => {
			images.slides[images.currentIdx.q].style.transform = 'scale(1.5)'; 
			images.slides[images.currentIdx.q].style.transition = " all 10000ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s";
			images.slides[images.currentIdx.q].style.zIndex = z
			//images.slides[images.currentIdx.q].style.visibility
			//images.showImageWithCurrentIdxScale(images.currentIdx.q)
			console.log('увеличение')
			resolve()
		},100)	
	})

	p.then(()=>{
		return new Promise((resolve, reject)=>{
			setTimeout(() => {
				images.slides[images.currentIdx.q].style.opacity=0;
				images.slides[images.currentIdx.z].style.opacity=0;
				//images.imageOpacity(images.currentIdx.q)
				console.log('прозрачность')
				resolve()
			},3000)	
		})
	}).then(()=>{
		return new Promise((resolve, reject)=>{
			setTimeout(() => {
				//images.slides[images.currentIdx.z].style. 
				images.showImageWithCurrentIdx(images.currentIdx.z) 
				images.slides[images.currentIdx.z].style.transition = " all 10000ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s";
				images.slides[images.currentIdx.z].style.opacity=1;
				
				
				images.slideNavActiveRemove(images.currentIdx.q)
				images.slideNavActive(images.currentIdx.z) 
				
				
				//images.setNextRightImage()
				console.log('следующий')
				resolve()
			},3000)	
		})
	}).then(()=>{
		return new Promise((resolve, reject)=>{
			setTimeout(() => {
				//images.showImageWithCurrentIdx(images.currentIdx.z);
				images.hideVisibleImage(images.currentIdx.q) 
				images.slides[images.currentIdx.q].style.transform = ''; 
				images.slides[images.currentIdx.q].style.transition = ""
				images.slides[images.currentIdx.q].style.opacity=1;
				images.setNextRightImage()
				console.log('пересчет следующий')
				resolve()
			},4000)	
		})
	})
	z++
}

animate()

//let timerId = setInterval(() => {
//console.log(z)
//	animate()
	
		
//}, 15000);
// dichiarare l’array di oggetti letterali per popolare dinamicamente il carosello.

const images = [
	{
		image: './img/01.webp',
		title: "Marvel's Spiderman Miles Morales",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: './img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: './img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: './img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: './img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

let currentIndex= 0;

const carouselDOMElement = document.querySelector(".carousel")

for (let i = 0; i < images.length ; i++){
	const slide = images[i]
	const image = slide.image;
	const title = slide.title;
	const text = slide.text;

	html = `
	<div class="slide">
        <img class="img-slide" src="${image}" alt="">
        <div class="content-slide">
            <h2 class="title-slide">${title}</h2>
            <p class="text-slide">${text}</p>            
		</div>
    </div>
	`
	carouselDOMElement.innerHTML += html;
	console.log(carouselDOMElement)
}


let slideDOMElement = document.querySelectorAll(".slide")
// let currentSlide = slideDOMElement[currentIndex]

slideDOMElement[currentIndex].classList.add("active")

const btnTop = document.querySelector(".btn-top")
const btnDown = document.querySelector(".btn-down")

btnTop.addEventListener("click", prevSlide );
btnDown.addEventListener("click" , nextSlide);


function nextSlide() {
	slideDOMElement[currentIndex].classList.remove("active")

	if (currentIndex === slideDOMElement.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex++;
	}
	slideDOMElement[currentIndex].classList.add("active");
}

function prevSlide(){
	slideDOMElement[currentIndex].classList.remove("active")

	if (currentIndex === 0) {
		currentIndex = slideDOMElement.length - 1;
	} else {
		currentIndex--;
	}
	slideDOMElement[currentIndex].classList.add("active");
}

setInterval(nextSlide, 3000)
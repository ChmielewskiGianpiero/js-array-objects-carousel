// dichiarare l’array di oggetti letterali per popolare dinamicamente il carosello.

const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

const carouselDOMElement = document.querySelector(".carousel")

for (let i = 0; i < images.length; i++) {
  const currentImage = images[i];
  image = currentImage.image;
  title = currentImage.title;
  text = currentImage.text;

  const html = `
    <img class="carousel-item" src="${ image }" alt="">
    <h2 class="title-slide">${ title }</h2>
    <p class="text-slide">${ text }</p>
  `
  carouselDOMElement.innerHTML += html;
  console.log(html);
}

  
const itemDOMElements = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

let currentSlide = itemDOMElements[currentIndex]
currentSlide.classList.add("active")

const btnTop = document.querySelector(".btn-up");
const btnBottom = document.querySelector(".btn-down");

// btnTop.addEventListener("click,", function(){
// 	 const nextSlideElement = itemDOMElements[currentIndex + 1]

// 	 if (nextSlideElement) {
// 	 	const activeSlideElement = itemDOMElements[currentIndex]
// 	 	activeSlideElement.classList.remove('active')
// 	 	nextSlideElement.classList.add('active')
// 	 	currentIndex++
// 	 }
// })

 btnTop.addEventListener("click", function () {
     itemDOMElements[currentIndex].classList.remove("active");
     currentIndex++;
     itemDOMElements[currentIndex].classList.add("active");
 })

 btnBottom.addEventListener("click", function () {
     itemDOMElements[currentIndex].classList.remove("active");
     currentIndex--;
     itemDOMElements[currentIndex].classList.add("active");
 })
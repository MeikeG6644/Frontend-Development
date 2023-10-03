//Searchbar
const searchForm = document.querySelector('section form');
const searchInput = document.querySelector('section form input');
const Keywords = ['product', 'vaas'];

function Zoeken(event) {
    event.preventDefault();

    const userInput = searchInput.value.toLowerCase();

    if (Keywords.includes(userInput)) {
        window.location.href = 'product.html';
    } else {
        alert('Geen gevonden resultaten');
    }
}

searchForm.addEventListener('submit', Zoeken);






//Caroussel
const carousel = document.querySelector(".product main > article:first-of-type > article:first-of-type > article:last-of-type");
const images = carousel.querySelectorAll(".product main > article:first-of-type > article:first-of-type > article:last-of-type > article:first-of-type img");
const leftArrow = document.querySelector(".product main > article:first-of-type > article:first-of-type >article:last-of-type img[src='images/icons/icon_pijll_zwart.png']");
const rightArrow = document.querySelector(".product main > article:first-of-type > article:first-of-type >article:last-of-type img[src='images/icons/icon_pijlr_zwart.png']");
let currentIndex = 0;

// Function laat huigdige foto zien
function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}

// Function terug naar vorige foto
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Function door naar volgende foto
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Add event listeners pijltjes links en rechts
leftArrow.addEventListener("click", prevImage);
rightArrow.addEventListener("click", nextImage);

// Initialize the carousel
showImage(currentIndex);








//Accordion
const accordion = document.getElementsByClassName('contentbox');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}









//Hamburger menu






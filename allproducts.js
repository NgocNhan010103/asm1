//sorting
function toggleSortOptions() {
    var sortOptions = document.getElementById("sortOptions");
    if (sortOptions.style.display === "none") {
        sortOptions.style.display = "block";
    } else {
        sortOptions.style.display = "none";
    }
}

function selectOption(option) {
    var sortTrigger = document.querySelector(".sort-trigger");
    sortTrigger.textContent = option.textContent;
    var sortOptions = document.getElementById("sortOptions");
    sortOptions.style.display = "none";
}

//slider-img
const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const imageWrapper = document.querySelector('.image-wrapper');
const images = Array.from(imageWrapper.querySelectorAll('.proa'));

let currentIndex = 0;
let imageWidth = images[0].offsetWidth;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});

window.addEventListener('resize', () => {
    imageWidth = images[0].offsetWidth;
    sliderContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});
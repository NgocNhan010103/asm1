const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const imageWidth = document.querySelector('.image-wrapper img').offsetWidth;
const imageCount = document.querySelectorAll('.image-wrapper img').length;

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageCount;
    sliderContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    sliderContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});
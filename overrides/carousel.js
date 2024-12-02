let slideIndex = 0;
let carouselIndex = 0;
let carouselInterval;

const navigateSlides = (currentIndex) => {
  clearTimeout(carouselInterval);
  showSlide(currentIndex + 1);
};

const showSlide = (index) => {
  const slides = document.getElementsByClassName("slide-show");

  slideIndex = (index + slides.length) % slides.length;

  Array.from(slides).forEach((slide) => {
    slide.style.display = "none";
    slide.style.opacity = "0";
  });
  slides[slideIndex].style.display = "block";
  slides[slideIndex].style.opacity = "1";
};

const carousel = () => {
  const slides = document.getElementsByClassName("slide-show");

  Array.from(slides).forEach((slide) => {
    slide.style.opacity = "0";
    slide.style.display = "none";
  });

  carouselIndex = (carouselIndex + 1) % slides.length;
  slides[carouselIndex].style.display = "block";
  slides[carouselIndex].style.opacity = "1";

  carouselInterval = setTimeout(carousel, 10000);
};

carousel();

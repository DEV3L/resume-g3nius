document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
          &copy; ${currentYear} Site built by Justin Beall from Dev3loper AI 
          | AI-XP | <a href="https://dev3loper.ai" target="_blank">dev3loper.ai</a>
  `;

  document.body.appendChild(footer);
});

let slideIndex = 1;
const navigateSlides = (offset) => {
  showSlide((slideIndex += offset));
};

const showSlide = (index) => {
  const slides = document.getElementsByClassName("slide-show");

  slideIndex = index > slides.length ? 1 : index < 1 ? slides.length : index;

  Array.from(slides).forEach((slide) => {
    slide.style.display = "none";
    slide.style.opacity = "0";
  });
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.opacity = "1";
};

let carouselIndex = 0;
const carousel = () => {
  const slides = document.getElementsByClassName("slide-show");

  Array.from(slides).forEach((slide) => {
    slide.style.opacity = "0";
    slide.style.display = "none";
  });

  carouselIndex = (carouselIndex % slides.length) + 1;
  slides[carouselIndex - 1].style.display = "block";
  slides[carouselIndex - 1].style.opacity = "1";

  setTimeout(carousel, 10000);
};

carousel();

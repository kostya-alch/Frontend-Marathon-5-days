const sliderGallery = (addActiveClass) => {
  const slides = document.querySelectorAll('.slide');

  slides[addActiveClass].classList.add('active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    });
  }

  const clearActiveClasses = () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  };
};
sliderGallery(2);

// const slides = document.querySelectorAll('.visible, .noVisible')

// let currentSlideIndex = 0

// function other(indexOther) {
//     currentSlideIndex = currentSlideIndex + indexOther
//     currentSlideIndex = Math.min(Math.max(currentSlideIndex,0), slides.length -1)
//     slides[currentSlideIndex].scrollIntoView({behavior:"smooth"})
// }

const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function showSlide(index) {
  slides[currentSlideIndex].classList.remove('active');
  currentSlideIndex = index;
  slides[currentSlideIndex].classList.add('active');
  slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth' });
}

function nextSlide() {
  const nextIndex = currentSlideIndex + 1;
  if (nextIndex < slides.length) {
    showSlide(nextIndex);
  }
}

function prevSlide() {
  const prevIndex = currentSlideIndex - 1;
  if (prevIndex >= 0) {
    showSlide(prevIndex);
  }
}

document.querySelector('#next').addEventListener('click', nextSlide);
document.querySelector('#prev').addEventListener('click', prevSlide);

const  openModalButton = document.querySelector('#maisInfo');
const closeModalButton = document.querySelector('#closeModal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle('hide'));
    fade.classList.toggle('hide');
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
});

// const rightButton = document.querySelector('.setaDireita')
// const leftButton = document.querySelector('.setaEsquerda')
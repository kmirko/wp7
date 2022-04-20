import './scss/main.scss';

const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 500);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};
// const home1 = document.querySelector('#home');
// const section1 = document.querySelector('.cases');
// const section2 = document.querySelector('.cases1');

// home1.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   section1.scrollIntoView({ behavior: 'smooth' });
//   section2.scrollIntoView({ behavior: 'smooth' });
// });
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const section1 = document.querySelector('.cases');
const section2 = document.querySelector('.cases1');

btn1.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});
btn2.addEventListener('click', function () {
  section2.scrollIntoView({ behavior: 'smooth' });
});

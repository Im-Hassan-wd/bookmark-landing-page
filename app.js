// NAVIGATION
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('header ul');
const socialLink = document.querySelector('.social');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
  socialLink.classList.toggle('active');
});

// FAQ accordion
const faq = document.querySelector('.accordion ul');

faq.addEventListener('click', (e) => {
  // console.log(e.target.tagName === 'IMG')
  if(e.target.tagName === 'IMG' || e.target.tagName === 'H4'){
    e.target.classList.toggle('active');
    e.target.parentElement.parentElement.children[1].classList.toggle('active');
  }
  if(e.target.tagName === 'H4'){
    e.target.nextElementSibling.classList.toggle('active');
  }
});

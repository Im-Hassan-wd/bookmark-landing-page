// NAVIGATION
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('header ul');
const socialLink = document.querySelector('.social');
const features = document.querySelector('#features');
const tabs = document.querySelectorAll('.tab1');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
  socialLink.classList.toggle('active');
});

// illustration tabs

features.addEventListener('click', (e) => {

  if(e.srcElement.outerText === 'Simple Bookmarking'){
    e.target.parentElement.nextElementSibling.style.display = 'flex';
    e.target.parentElement.nextElementSibling.nextElementSibling.style.display = 'none';
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
  }
  if(e.srcElement.outerText === 'Speedy Searching'){
    e.target.parentElement.nextElementSibling.style.display = 'none';
    e.target.parentElement.nextElementSibling.nextElementSibling.style.display = 'flex';
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
  }
  if(e.srcElement.outerText === 'Easy Sharing'){
    e.target.parentElement.nextElementSibling.style.display = 'none';
    e.target.parentElement.nextElementSibling.nextElementSibling.style.display = 'none';
    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'flex';
  }
});



// FAQ accordion
const faq = document.querySelector('.accordion ul');

faq.addEventListener('click', (e) => {

  if(e.target.tagName === 'IMG' || e.target.tagName === 'H4'){
    e.target.classList.toggle('active');
    e.target.parentElement.parentElement.children[1].classList.toggle('active');
  }
  if(e.target.tagName === 'H4'){
    e.target.nextElementSibling.classList.toggle('active');
  }
});

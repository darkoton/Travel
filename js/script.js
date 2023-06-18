//-------------------Поисковик в header---------------------------//
let searchBody = document.querySelector('.search__body')
let searchText = document.querySelector('.search__text')
let searchButton = document.querySelector('.search__button')
let account = document.querySelector('.actions__account')


function searchAdd() {
  searchBody.classList.add('search__body-active')
  searchText.classList.remove('search__text-hidden')
  searchText.classList.add('search__text-active')
  searchButton.classList.remove('search__button-hidden')
    searchButton.classList.add('search__button-active')
}

function searchRemove() {
  searchBody.classList.remove('search__body-active')
  searchText.classList.add('search__text-hidden')
  searchText.classList.remove('search__text-active')
  searchButton.classList.add('search__button-hidden')
  searchButton.classList.remove('search__button-active')
  searchText.value = '';
}

function search() {
  if (searchButton.classList.contains('search__button-hidden')) {
    searchAdd();
  }
  else if (searchButton.classList.contains('search__button-active')) {
    searchRemove();
  }
}
//-------------------Меню бургер------------------------//





let menu = document.querySelector('.menu');
let header = document.querySelector('.header');
let body = document.body;
body.classList.add ('on');

function burger() {
  menu.classList.toggle('menu-active');
  menu.classList.toggle('menu-hidden');
  body.classList.toggle ('on');
  body.classList.toggle ('off');

  console.log(1);
}


  window.addEventListener('resize', function() {
    let windowWidth = window.screen.width;
      if (windowWidth > 992) {
        body.classList.remove('off')
        body.classList.add('on')
        menu.classList.add('menu-hidden');
        menu.classList.remove('menu-active');
      }
  });




//------------------Progress bar----------------------------//
let progress = document.querySelector('.number__progress-bar');
let people = document.querySelector('.number__people');

function ProgressBarPlus() {
  progress.value = progress.value + 10;
  if (people.value <= 9) {
    ++people.value
  }


  console.log(progress.value);
}
function ProgressBarMinus() {
  progress.value = progress.value - 10;
  if (people.value  >=1) {
    --people.value
  }


  console.log(progress.value);
}

//-----------------------------about us----------------------------//
 document.querySelector('.about__list-title-1').onclick = function changeContent() {
  let listTitle1 = document.querySelector('.about__list-title-1');
  let icon1 = document.querySelector('.icon-globe');
  let text1 = document.querySelector('.about__list-text-1');
  listTitle1.classList.toggle('about__list-title-active');
  text1.classList.toggle('about__list-text-active');
}
 document.querySelector('.about__list-title-2').onclick = function changeContent() {
  let listTitle2 = document.querySelector('.about__list-title-2');
    let icon1 = document.querySelector('.icon-user-2');
  let text2 = document.querySelector('.about__list-text-2');
  listTitle2.classList.toggle('about__list-title-active');
  text2.classList.toggle('about__list-text-active');
}
 document.querySelector('.about__list-title-3').onclick = function changeContent() {
  let listTitle3 = document.querySelector('.about__list-title-3');
    let icon1 = document.querySelector('.icon-headphones');
  let text3 = document.querySelector('.about__list-text-3');
  listTitle3.classList.toggle('about__list-title-active');
  text3.classList.toggle('about__list-text-active');
}

new Swiper('.testiminial__slider', {
  loop: true,
  autoplay:{
      delay: 3000,
      stopOnLastSlide: false,
      disabledOnInteraction:false,
},
  pagination: {
  el: '.testiminial-pagination',
  clickable: true,
},
});

//------------------------------scroll----------------------------------//
 document.querySelector('.footer__about').onclick = function aboutUs() {
  const about = document.querySelector('.about');
  about.scrollIntoView({
    block: "center",
    inline:"nearest",
    behavior:"smooth"
  });
}

document.querySelector('.footer__destinations').onclick = function destination() {
 const destination = document.querySelector('.destination ');
 destination.scrollIntoView({
   block: "center",
   inline:"nearest",
   behavior:"smooth"
 });
}

document.querySelector('.menu__destination').onclick = function destination() {
 const destination = document.querySelector('.destination ');
 destination.scrollIntoView({
   block: "center",
   inline:"nearest",
   behavior:"smooth"
 });


}

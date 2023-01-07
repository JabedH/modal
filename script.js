'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

const openModalFun = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', openModalFun);

const closeModalFun = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', closeModalFun);
overlay.addEventListener('click', closeModalFun);
document.addEventListener('keydown', function (e) {
  console.log(e.key === 'Escape');
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModalFun();
    }
  }
});

// we can do this way also
// overlay.addEventListener('click', function () {
//   console.log('state:', true);
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

/*=============== COURSES MODAL ===============*/

const modals = document.querySelectorAll('.course__modal'),
    modalButtons = document.querySelectorAll('.course__button'),
    modalCloses = document.querySelectorAll('.course__modal-close');

let activeModal = (modalClick) => {
    modals[modalClick].classList.add('active-modal');
}

modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => { 
        activeModal(i);
    });
});

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener('click', () => {
        modals[i].classList.remove('active-modal');
    });
});

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SHOW SCROLL UP ===============*/ 

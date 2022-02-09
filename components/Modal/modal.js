const btnBasicModal = document.querySelector('#basic-modal-demo');
const btnBasicModalClose = document.querySelector('#basic-modal-close');
const scrimDiv = document.querySelector('.scrim');
const basicModal = document.querySelector('.basic-modal');

const closeModal = () => {
    scrimDiv.classList.remove('scrim-active');
    basicModal.style.display = 'none';
}

btnBasicModal.addEventListener('click', () => {
    scrimDiv.classList.add('scrim-active');
    basicModal.style.display = 'flex';
})

btnBasicModalClose.addEventListener('click', closeModal);
scrimDiv.addEventListener('click', closeModal);
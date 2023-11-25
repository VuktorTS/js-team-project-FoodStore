(() => {
  const modalRefs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  modalRefs.openModalBtn.addEventListener('click', toggleModal);
  modalRefs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modalRefs.modal.classList.toggle('is-hidden');
  }
})();

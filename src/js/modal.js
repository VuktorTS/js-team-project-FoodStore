
const modal = document.getElementById("modalWindow");
const cards = document.getElementsByClassName("card-modal");
const modalImage = document.getElementsByClassName("modal-image")[0];
const closeButton = document.getElementById("closeBtn");

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function() {
        const cardImage = this.querySelector("img").src;
  modalImage.src = cardImage;

      modal.style.display = "block";
    }
  }
closeButton.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
}
const modalButton = document.getElementById('modalButton');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const openMenu = document.getElementById("openMenu");
const mobileNavContainer = document.getElementById("mobileNavContainer");
const closeMenu = document.getElementById("closeMenu");

modalButton.addEventListener('click', function() {
    modal.classList.add('show-modal');
})

closeModalButton.addEventListener('click', function() {
    modal.classList.remove('show-modal');
})

openMenu.addEventListener("click", function() {
    mobileNavContainer.classList.add('show-menu');
})

closeMenu.addEventListener('click', function() {
    mobileNavContainer.classList.remove('show-menu');
})

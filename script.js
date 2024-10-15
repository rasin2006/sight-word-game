// Toggle the visibility of the popup image
function toggleMenu() {
    const imagePopup = document.getElementById('imagePopup');
    if (imagePopup.style.display === 'none' || imagePopup.style.display === '') {
        imagePopup.style.display = 'block';
    } else {
        imagePopup.style.display = 'none';
    }
}

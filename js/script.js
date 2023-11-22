const imageUrls = [
    "assets/japan.jpg",
    "assets/bandung.jpg",
    "assets/bali2.jpg",
];

let currentIndex = 0;
const imageElement = document.getElementById('indonesia');
function changeImage() {
    imageElement.style.opacity = '0';
    setTimeout(() => {
        imageElement.src = imageUrls[currentIndex];
        currentIndex = (currentIndex + 1) % imageUrls.length;
        imageElement.style.opacity = '1';
    }, 1000);
}
setInterval(changeImage, 5000);


document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.querySelector('.input-contact');
    contactForm.addEventListener('submit', function (event) {
       event.preventDefault();
   
       var nameInput = document.getElementById('name-input');
       var emailInput = document.getElementById('email-input');
   
       if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
         alert('Please fill out all fields');
         return;
       }
   
       alert('Thank you for your message. We will contact you within 24 hours.');
   
       nameInput.value = '';
       emailInput.value = '';
    });
   });
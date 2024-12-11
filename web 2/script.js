let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function changeImage() {
  images[currentIndex].classList.remove('active'); // Remove active class from current image
  currentIndex = (currentIndex + 1) % images.length; // Move to the next image, and loop back to the first
  images[currentIndex].classList.add('active'); // Add active class to new image
}

setInterval(changeImage, 8000); // Change image every 8 seconds

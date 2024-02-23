document.addEventListener("DOMContentLoaded", function() {
    // Get the image slideshow container and toggle button
    const imageSlideshow = document.getElementById("imageSlideshow");
    const toggleButton = document.getElementById("toggleButton");
  
    // Set the initial image index
    let currentImageIndex = 0;
  
    // Function to toggle to the next image
    function toggleImage() {
      currentImageIndex = (currentImageIndex + 1) % 2; // Assuming 2 images, change to the number of images you have
      imageSlideshow.querySelector('.carousel-item.active').classList.remove('active');
      imageSlideshow.querySelectorAll('.carousel-item')[currentImageIndex].classList.add('active');
    }
  
    // Set interval to automatically toggle images every 10 seconds
    const imageToggleInterval = setInterval(toggleImage, 10000);
  
    // Add event listener to manually toggle images when the button is clicked
    toggleButton.addEventListener("click", function() {
      toggleImage();
    });
  
    // Pause the automatic toggle when the user hovers over the slideshow
    imageSlideshow.addEventListener("mouseenter", function() {
      clearInterval(imageToggleInterval);
    });
  
    // Resume automatic toggle when the user leaves the slideshow
    imageSlideshow.addEventListener("mouseleave", function() {
      imageToggleInterval = setInterval(toggleImage, 10000);
    });
  });
  
// Add class 'navbarDark' to the navbar on scroll
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.navbar');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    let isVisible = true;

    window.onscroll = function () {
        var top = window.scrollY;
        if (top >= 100) {
            header.classList.add('navbarDark');
        } else {
            header.classList.remove('navbarDark');
        }
    };

    // Handle the click event for a specific element (e.g., a button)
    // Replace 'your-button-id' with the actual ID of the element you want to make clickable
    document.getElementById('your-button-id').addEventListener('click', function () {
        window.location = 'http://google.com';
    });

    // Toggle between two images every 2 seconds
    setInterval(function () {
        if (isVisible) {
            image1.style.display = 'none';
            image2.style.display = 'inline';
        } else {
            image1.style.display = 'inline';
            image2.style.display = 'none';
        }
        isVisible = !isVisible;
    }, 2000);

  const removePreloader = () => preloader.remove();
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => setTimeout(removePreloader, 400));
  }

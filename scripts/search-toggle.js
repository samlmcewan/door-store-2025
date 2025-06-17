const animatedIcon2 = document.querySelector(".mobile-search-btn .icon");
const searchToggle = document.querySelector(".mobile-search-btn");
const searchIcon = document.querySelector(".mobile-search-btn svg");

searchToggle.addEventListener('click', (e) => {
    
        animatedIcon2.classList.toggle("open");
        searchIcon.classList.toggle("open");
        
    });
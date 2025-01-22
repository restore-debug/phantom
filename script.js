// JavaScript for menu-toggle functionality

// Select the menu toggle button and the navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

// Add an event listener to toggle the visibility of the navigation menu
menuToggle.addEventListener('click', () => {
    // Toggle a class to show or hide the menu
    navList.classList.toggle('visible');

    // Optionally, change the button icon (e.g., between hamburger and close icons)
    if (navList.classList.contains('visible')) {
        menuToggle.innerHTML = '&#10005;'; // X icon
    } else {
        menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    }
});


document.getElementById("secureForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const data = document.getElementById("data").value;
    const key = "your-secret-key";
    const encrypted = CryptoJS.AES.encrypt(data, key).toString();

    console.log("Encrypted Data:", encrypted); // View in browser console
});

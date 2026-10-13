const menuToggle = document.querySelector("#hamburgerMenu");
const navLinks = document.querySelectorAll(".navLinks"); //all goes through all instances of navLinks class
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", function() {
    navLinks.forEach(function(navLink) {
         navLink.classList.toggle("open"); //adds class open when hamburger menu is opened for each navLink
    });
    
    menu.classList.toggle("open")
    

     
    const isOpen = menu.classList.contains("open"); 
    if (isOpen) {
        menuToggle.textContent = "|||";
    } else {
        menuToggle.textContent = "☰";
    }
    menuToggle.setAttribute("aria-expanded", isOpen); 
});
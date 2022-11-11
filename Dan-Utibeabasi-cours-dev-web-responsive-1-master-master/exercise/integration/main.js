let mobileMenuButton = document.querySelector(".hamburger")
// Path: exercise\integration\main.js
mobileMenuButton.addEventListener("click", function() {
	  console.log("The mobile menu button was clicked.")
	  // Toggle the "active" class on both the "navbar-burger" and the "navbar-menu"
	  mobileMenuButton.classList.toggle("active");
	  let 	secondaryMobileMenu = document.querySelector(".top-header .secondary-menu"),
	    	primaryMobileMenu = document.querySelector(".top-header .primary-menu")
	  		primaryMobileMenu.classList.toggle("active")
	  		secondaryMobileMenu.classList.toggle("active")
})

const menuIcon = document.querySelector(".menu-icon"); // Ensure you define the menuIcon
const navbar = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");

function toggleMobileMenu() {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    menuIcon.classList.remove("fa-close");
    menuIcon.classList.add("fa-bars");
  } else {
    navbar.style.display = "block";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-close");
  }
}

function resetMobileMenu() {
  if (window.innerWidth <= 1024) {
    navbar.style.display = "none";
    menuIcon.classList.remove("fa-close");
    menuIcon.classList.add("fa-bars");
  } else {
    navbar.style.display = "flex";
  }
}

// Toggle menu on icon click
menuIcon.addEventListener("click", toggleMobileMenu);

// Close menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", resetMobileMenu);
});

window.addEventListener("resize", resetMobileMenu);

// Make btn1 background transparent when btn2:hover
const btn1 = document.querySelector(".download-button");
const btn2 = document.querySelector(".learnmore-button");

btn2.addEventListener("mouseenter", () => {
  btn1.classList.add("learnmore-button-hovered");
});

btn2.addEventListener("mouseleave", () => {
  btn1.classList.remove("learnmore-button-hovered");
});

// to redirect for get started
// function getStartedRedirect() {
//   const signupButton = document.querySelector(".signupButton");
//   signupButton.addEventListener("click", () => {
//     console.log("button clicked");
//     window.location.href = "/getstarted";
//   });
// }

// getStartedRedirect();

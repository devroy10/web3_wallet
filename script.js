const menuIcon = document.querySelector(".menu-icon"); // Ensure you define the menuIcon
const navbar = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const content = document.getElementById("content");

  // Check if this is the first load of the session
  const isFirstLoad = !sessionStorage.getItem("pageLoaded");

  if (isFirstLoad) {
    // Show the loading screen only if it's the first load
    // if (loadingScreen) {
    //   loadingScreen.style.display = "block"; // Ensure loading screen is visible
    // }

    if (content) {
      content.classList.add("hidden"); // Hide content initially
    }

    // Immediately hide the loading screen and show the content
    if (loadingScreen) {
      loadingScreen.style.display = "none";
    }
    if (content) {
      content.classList.remove("hidden");
      content.style.display = "block";
    }

    // Mark the page as loaded in session storage
    sessionStorage.setItem("pageLoaded", "true");

    // Allow time for the fade-out to complete before removing the loading screen
    // setTimeout(() => {
    //   if (loadingScreen) {
    //     loadingScreen.style.display = "none"; // Remove loading screen after fade-out
    //   }
    //   if (content) {
    //     content.classList.remove("hidden"); // Show the content
    //     content.style.display = "block"; // Show the content
    //   }
    //   // Mark the page as loaded in session storage
    //   sessionStorage.setItem("pageLoaded", "true");
    // }, 1300); // Match this duration to the CSS transition duration
  } else {
    // If it's not the first load, show content directly
    if (loadingScreen) {
      loadingScreen.style.display = "none";
    }
    if (content) {
      content.classList.remove("hidden");
      content.style.display = "block";
    }
  }
});

// // script.js;
// document.addEventListener("DOMContentLoaded", () => {
//   const loadingScreen = document.getElementById("loading-screen");
//   const content = document.getElementById("content");

//   // Hide the loading screen and show content when DOM is fully loaded
//   // if (loadingScreen) {
//   //   loadingScreen.style.display = "none"; // Hide loading screen
//   //   // loadingScreen.style.opacity = "0"; // Start the fade-out
//   //   // loadingScreen.style.visibility = "hidden"; // Make it non-interactive after fade-out
//   // }

//   if (content) {
//     content.classList.remove("hidden"); // Remove hidden class
//     content.style.display = "block"; // Show the content
//   }

//   // Allow time for the fade-out to complete before removing the loading screen
//   setTimeout(() => {
//     if (loadingScreen) {
//       loadingScreen.style.display = "none"; // Remove loading screen from display after fade-out
//     }
//   }, 3000); // Match this duration to the CSS transition duration
// });

// script.js
// document.addEventListener("DOMContentLoaded", () => {
//     const loadingScreen = document.getElementById('loading-screen');
//     const content = document.getElementById('content');

//     // Fade out the loading screen
//     if (loadingScreen) {
//         loadingScreen.style.opacity = '0'; // Start the fade-out
//         loadingScreen.style.visibility = 'hidden'; // Make it non-interactive after fade-out
//     }

//     // Show the content
//     if (content) {
//         content.classList.remove('hidden'); // Remove hidden class
//         content.style.display = 'block'; // Show the content
//     }

//     // Allow time for the fade-out to complete before removing the loading screen
//     setTimeout(() => {
//         if (loadingScreen) {
//             loadingScreen.style.display = 'none'; // Remove loading screen from display after fade-out
//         }
//     }, 2000); // Match this duration to the CSS transition duration
// });

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

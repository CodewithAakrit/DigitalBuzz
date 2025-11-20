/* ============================*/


    const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

// SAFETY CHECK (avoids console errors)
if (hamburger && navLinks) {

    // Toggle mobile menu open/close
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when any nav item is clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}




/* ============================
      WHY US AUTO SLIDER
============================ */
const whySlider = document.getElementById("whyusSlider");
let whyScroll = 0;
let whyCardWidth = 300; // card size + gap

function autoSlideWhy() {
    if (!whySlider) return;

    whyScroll += whyCardWidth;

    if (whyScroll >= whySlider.scrollWidth - whySlider.clientWidth) {
        whyScroll = 0;
    }

    whySlider.scrollTo({
        left: whyScroll,
        behavior: "smooth"
    });
}

if (whySlider) {
    setInterval(autoSlideWhy, 3000);
}



/* ============================
   HYDERABAD PROJECTS SLIDER
============================ */



/* ============================*/

const popup = document.getElementById("popupForm");
const closeBtn = document.getElementById("popupClose");

function openPopup() {
    popup.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

function openPopup() {
    document.getElementById("popupForm").style.display = "flex";
}


let currentIndex = 0;
const sliderTrack = document.querySelector(".hyd-track");
const totalCards = document.querySelectorAll(".hyd-card").length;

function slideCards() {
    currentIndex++;

    if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideCards, 4000);  // change 4000 to control speed (ms)




document.addEventListener("DOMContentLoaded", () => {

    const hero   = document.querySelector(".hero");
    const footer = document.querySelector("footer");
    const bar    = document.getElementById("mobileCallBtn");

    if (!hero || !bar) {
        console.error("Hero or mobileCallBtn not found in DOM!");
        return;
    }

    function toggleMobileBar() {
        const heroBottom = hero.getBoundingClientRect().bottom;
        const footerTop  = footer ? footer.getBoundingClientRect().top : Infinity;

        // Show only if hero is fully scrolled away AND footer not reached
        if (heroBottom < 0 && footerTop > window.innerHeight) {
            bar.classList.add("show");
        } else {
            bar.classList.remove("show");
        }
    }

    window.addEventListener("scroll", toggleMobileBar);
    window.addEventListener("resize", toggleMobileBar);

    toggleMobileBar(); // run once on load
});

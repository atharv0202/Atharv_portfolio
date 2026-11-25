function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Typing animation
const words = ["Developer", "Programmer", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const element = document.querySelector(".typing");
    const word = words[wordIndex];

    element.textContent = word.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > word.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

// Contact form demo
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMessage").textContent =
        "Thank you! Your message form was submitted successfully.";

    this.reset();
});

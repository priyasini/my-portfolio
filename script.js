
const dotsContainer = document.getElementById("dots");

// Create floating background dots
const dotColors = ["#A3B18A", "#C9A0A0", "#A89BBE"];

for (let i = 0; i < 32; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";

    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.background =
        dotColors[Math.floor(Math.random() * dotColors.length)];

    dot.style.setProperty("--dx", `${Math.random() * 50 - 25}px`);
    dot.style.setProperty("--duration", `${5 + Math.random() * 8}s`);
    dot.style.animationDelay = `${Math.random() * -10}s`;

    const size = 3 + Math.random() * 4;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;

    dotsContainer.appendChild(dot);
}

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a section
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Interactive floating tech icons
document.querySelectorAll(".tech-icon").forEach((icon) => {
    icon.addEventListener("pointermove", (event) => {
        const rect = icon.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.12;

        icon.style.translate = `${x}px ${y}px`;
    });

    icon.addEventListener("pointerleave", () => {
        icon.style.translate = "";
    });
});

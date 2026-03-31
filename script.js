const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== Scroll Fade-In Animation =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to all sections and cards
document.querySelectorAll(
  'section > .section-container > h2, .glass-card, .highlight-card, .about-text, .hero-text, .hero-photo, .contact-info, .contact-form'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});


// ===== Navbar Background on Scroll =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 18, 25, 0.95)';
  } else {
    navbar.style.background = 'rgba(15, 18, 25, 0.8)';
  }
});
// Target the empty span we just created
const typingTarget = document.querySelector(".typing-text");
// The list of titles you want to rotate through
const roles = ["Stella Wanjira", "a Full-Stack Developer", "an IT Specialist"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    // Determine the current string to display
    if (isDeleting) {
        typingTarget.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTarget.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    // Adjust timing: typing is slower (150ms) than deleting (60ms)
    let speed = isDeleting ? 60 : 150;

    // Logic to switch between typing and deleting
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        speed = 2000; // Pause at the end of the full word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next word
        speed = 500; // Short pause before starting next word
    }

    setTimeout(type, speed);
}

// Start the animation
document.addEventListener("DOMContentLoaded", type);
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');

    // Load saved theme
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            toggleSwitch.checked = true;
        }
    }

    // Toggle logic
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
});

// 1. Define your IDs here (Double check these against your dashboard!)
const SERVICE_ID = 'service_ecenk1r';   // <--- CHANGE THIS
const TEMPLATE_ID = 'template_sfeek07'; // <--- CHANGE THIS

const btn = document.getElementById('button');
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        btn.innerText = 'Sending...';

        // This sends the actual form data
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(() => {
                btn.innerText = 'Send Message';
// 1. Replace your old alert line with this:
showToast("Success! Message sent to Stella. 🚀");
document.getElementById("contact-form").reset(); 

// 2. Add this function at the very bottom of your script.js
function showToast(message) {
    // Create the element
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerText = message;
    document.body.appendChild(toast);

    // Show it
    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    // Hide and remove it after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500);
    }, 3500);
}
                // This will tell us EXACTLY why it failed in a popup
                alert("Failed to send: " + JSON.stringify(err));
                console.error("EmailJS Error:", err);
            });
    });
}
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// On load: Default to dark if nothing is saved
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
} else {
    body.classList.remove('light-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save the choice
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
var typed = new Typed(".typing", {
    strings: [
        "a Full-Stack Developer",
        "an IT Student at DeKUT",
        "a Data Analyst",
        "a Cybersecurity Enthusiast"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});
function showToast(message) {
    // Create the element
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerText = message;
    
    document.body.appendChild(toast);

    // Trigger the slide-in
    setTimeout(() => {
        toast.classList.add("active");
    }, 100);

    // Remove it after 4 seconds
    setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => {
            toast.remove();
        }, 600); // Wait for transition to finish
    }, 4000);
}
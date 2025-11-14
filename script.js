// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for breed cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all breed cards, care items, and facts
document.querySelectorAll('.breed-card, .care-item, .fact, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Fun interactive feature: Random cat fact generator
const catFacts = [
    "Cats have been domesticated for over 4,000 years!",
    "A cat's brain is 90% similar to a human's brain.",
    "Cats have over 100 vocal sounds, while dogs only have 10.",
    "A cat can run at speeds up to 30 mph.",
    "Cats spend 30-50% of their day grooming themselves.",
    "A cat's whiskers are generally about the same width as its body.",
    "Cats can't taste sweetness due to a genetic mutation.",
    "The world's longest cat measured 48.5 inches long!"
];

// Add a random fact to console for fun
console.log('🐱 Cat Fact: ' + catFacts[Math.floor(Math.random() * catFacts.length)]);

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.opacity = '1';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.opacity = '0.7';
        }
    });
});
// Wait for the DOM to fully load before executing any scripts
document.addEventListener('DOMContentLoaded', () => {
    // Add 'loaded' class to body to trigger fade-in effect
    document.body.classList.add('loaded');
    
    // Example function for any future interactions you might want
    function setupCardClickListeners() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                alert(`You clicked on: ${card.querySelector('h3').innerText}`);
                // Here you could redirect to a detailed story page or show more info
            });
        });
    }
    
    // Call the setup function for card click listeners
    setupCardClickListeners();
});









// Wait for the DOM to fully load before executing any scripts
document.addEventListener('DOMContentLoaded', () => {
    // Add 'loaded' class to body to trigger fade-in effect
    document.body.classList.add('loaded');

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }
});





/* resources page*/

// Get all resource buttons
const resourceButtons = document.querySelectorAll('.resource-button');
// Get all modals
const modals = document.querySelectorAll('.modal');
// Get all close buttons
const closeButtons = document.querySelectorAll('.close');

// Add click event to each resource button
resourceButtons.forEach(button => {
    button.onclick = function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    }
});

// Add click event to each close button
closeButtons.forEach(button => {
    button.onclick = function() {
        this.closest('.modal').style.display = 'none';
    }
});

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}




/*Story Archives*/

document.addEventListener("DOMContentLoaded", function () {
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, index * 200); // Staggered animation
    });
});

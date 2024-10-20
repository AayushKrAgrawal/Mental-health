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




/* Self help Tools */
// Mood Tracking Script
const moodButtons = document.querySelectorAll('.mood-btn');
const moodResultText = document.getElementById('mood-result-text');

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedMood = button.getAttribute('data-mood');
        moodResultText.textContent = selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1);
    });
});

// Breathing Exercise Script
let breathingTimeout;

function startBreathingExercise() {
    const instruction = document.getElementById('breathing-instruction');
    const animation = document.querySelector('.breathing-animation');

    instruction.textContent = 'Breathe In...';
    animation.style.visibility = 'visible';
    
    breathingTimeout = setTimeout(() => {
        instruction.textContent = 'Breathe Out...';
    }, 3000);
}

function stopBreathingExercise() {
    const instruction = document.getElementById('breathing-instruction');
    const animation = document.querySelector('.breathing-animation');

    clearTimeout(breathingTimeout); // Stop the breathing animation
    instruction.textContent = 'Breathing exercise stopped.';
    animation.style.visibility = 'hidden'; // Hide the animation
}

// Guided Meditation Script
function startMeditation(minutes) {
    const status = document.getElementById('meditation-status');
    status.textContent = `Meditation started for ${minutes} minutes...`;

    setTimeout(() => {
        status.textContent = 'Meditation completed.';
    }, minutes * 60000);
}

// Journaling Script
const prompts = [
    "What is one thing you're grateful for today?",
    "What is one challenge you're facing and how can you approach it?",
    "What do you love most about yourself?",
    "What is one thing that made you smile today?"
];

function generateNewPrompt() {
    const promptText = document.getElementById('prompt-text');
    const randomIndex = Math.floor(Math.random() * prompts.length);
    promptText.textContent = prompts[randomIndex];
}





/* About US*/
// Add more interactivity, animations, or any other advanced effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    });
});

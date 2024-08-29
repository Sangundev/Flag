document.addEventListener('DOMContentLoaded', () => {
    const flag = document.querySelector('.flag');
    const star = document.querySelector('.star');
    const raiseFlagButton = document.getElementById('raise-flag-button');

    // Function to start flag animation
    function startFlagAnimation() {
        flag.style.animation = 'lift 5s ease-out forwards, wave 5s infinite linear';
        star.style.animation = 'lift 5s ease-out forwards'; // Make the star animate up with the flag
    }

    // Event listener for the raise flag button
    raiseFlagButton.addEventListener('click', () => {
        startFlagAnimation();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const themeSelect = document.getElementById('theme');
    const animationSelect = document.getElementById('animation');
    const saveBtn = document.getElementById('save-btn');
    const animateBtn = document.getElementById('animate-btn');
    const animatedBox = document.getElementById('animated-box');
    const body = document.body;

    // Load saved preferences
    loadPreferences();

    // Save preferences to localStorage
    saveBtn.addEventListener('click', () => {
        const preferences = {
            theme: themeSelect.value,
            animation: animationSelect.value
        };
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
        applyTheme(preferences.theme);
        alert('Preferences saved!');
    });

    // Trigger animation
    animateBtn.addEventListener('click', () => {
        const animationType = animationSelect.value;
        triggerAnimation(animationType);
    });

    // Load user preferences from localStorage
    function loadPreferences() {
        const savedPrefs = localStorage.getItem('userPreferences');
        if (savedPrefs) {
            const preferences = JSON.parse(savedPrefs);
            themeSelect.value = preferences.theme;
            animationSelect.value = preferences.animation;
            applyTheme(preferences.theme);
        }
    }

    // Apply selected theme
    function applyTheme(theme) {
        // Remove all theme classes first
        body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
        
        // Add selected theme class
        switch(theme) {
            case 'dark':
                body.classList.add('dark-theme');
                break;
            case 'blue':
                body.classList.add('blue-theme');
                break;
            default:
                body.classList.add('light-theme');
        }
    }

    // Trigger animation
    function triggerAnimation(type) {
        // Remove all animation classes first
        animatedBox.classList.remove('bounce', 'spin', 'pulse');
        
        // Force reflow to restart animation
        void animatedBox.offsetWidth;
        
        // Add selected animation class
        switch(type) {
            case 'spin':
                animatedBox.classList.add('spin');
                break;
            case 'pulse':
                animatedBox.classList.add('pulse');
                break;
            default:
                animatedBox.classList.add('bounce');
        }
    }
});

function nextLevel() {
    // hide element function
    function hideElement(elementId) {
        var element = document.getElementById(elementId);
        element.style.display = 'none';
    }

    // show element function
    function showElement(elementId) {
        var element = document.getElementById(elementId);
        element.style.display = 'block';
    }

    // hide intro screen
    hideElement('intro-area');

    // hide game area
    hideElement('game-area');

    // show then hide level number
    function showElementFor3Seconds(elementId, callback) {
        // show the element
        showElement(elementId);

        // wait for 3 seconds
        setTimeout(function() {
            // hide the element after 3 seconds
            hideElement(elementId);
            // Execute the callback function after hiding the element
            if (callback && typeof callback === 'function') {
                callback();
            }
        }, 3000); // 3000 milliseconds = 3 seconds
    }

    // callback function to show the game area after the level-splash
    function showGameArea() {
        showElement('game-area');
    }

    // show level splash and then show game area
    showElementFor3Seconds('level-splash', showGameArea);
}
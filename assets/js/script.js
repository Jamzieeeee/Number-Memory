// show element function
function showElement(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = 'block';
}

// hide element function
function hideElement(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = 'none';
}

// show then hide element function
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

let level = 0

let randomNumber = 0

// random number function
function generateNumber() {
    randomNumber = Math.floor(Math.random() * (10 ** level))
    document.getElementById("random-number").textContent = randomNumber; // update random number in html span
}

// increase level function
function increaseLevel() {
    level++;
    document.getElementById("level-display").textContent = level;
}

// next level function
function nextLevel() {
    // hide intro screen
    hideElement('intro-area');

    // hide game area
    hideElement('game-area');

    // callback function to show the game area after the level-splash
    function showGameArea() {
        showElement('game-area');
    }

    // increase level by 1
    increaseLevel();
    console.log(level);

    // generate new number
    generateNumber();
    console.log(randomNumber);

    // show random number splash and then show game area
    showElementFor3Seconds('number-splash', showGameArea);
}

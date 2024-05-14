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
function showElementForNSeconds(elementId, callback) {
    // show the element
    showElement(elementId);

    // wait for n seconds
    setTimeout(function () {
        // hide the element after n seconds
        hideElement(elementId);
        // Execute the callback function after hiding the element
        if (callback && typeof callback === 'function') {
            callback();
        }
    }, (1 + (level / 2)) * 1000); // n seconds: n = half level number + 1, x1000 to get from miliseconds to seconds

    console.log((1 + (level / 2)) * 1000);
}

let level = 0;

let randomNumberAsString = 0;

let typedNumber;

// random number function
function generateNumber() {
    // generate random number, and add 0s to start if it isn't the correct number of digits long
    randomNumberAsString = Math.floor(Math.random() * (10 ** level)).toString().padStart(level, '0');

    // update random number in all html spans
    for (let e of document.getElementsByClassName("random-number")) {
        e.textContent = randomNumberAsString;
    }
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

    // hide results screen
    hideElement('results');

    // callback function to show the game area after the level-splash
    function showGameArea() {
        showElement('game-area');
        document.getElementById("input-box").focus();
        document.getElementById("input-box").value = "";
    }

    // increase level by 1
    increaseLevel();
    console.log(level);

    // generate new number
    generateNumber();
    console.log(randomNumberAsString);

    // show random number splash and then show game area
    showElementForNSeconds('number-splash', showGameArea);

}

// submit function
function submitAnswer() {
    hideElement("game-area");

    // set typedNumber variable
    typedNumber = document.getElementById("input-box").value;

    // if input does not equal random number, set level to 0
    if (typedNumber !== randomNumberAsString) {
        level = 0;
    }

    document.getElementById("typed-number").textContent = typedNumber;
    console.log(typedNumber);

    showElement("results");

    // change button text
    if (level == 0) {
        document.getElementById("next-or-restart").textContent = "Restart Game";
    } else {
        document.getElementById("next-or-restart").textContent = "Next Level";
    }
}


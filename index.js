window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden");
})
 
function onClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
}

var numberOfButtons = document.querySelectorAll(".sound-button").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".sound-button")[i].addEventListener("click", onClick);
}

addEventListener("keydown", buttonEvent);

function buttonEvent(event) {
    makeSound(event.key);
}

function makeSound(key) {

    switch(key) {

        case "Q", "q":
            var sound1 = new Audio("sounds/sound1.mp3")
            sound1.play();
        break;

        case "W", "w":
            var sound2 = new Audio("sounds/sound2.mp3")
            sound2.play();
        break;

        case "E", "e":
            var sound3 = new Audio("sounds/sound3.mp3")
            sound3.play();
        break;

        case "R", "r":
            var sound4 = new Audio("sounds/sound4.mp3")
            sound4.play();
        break;

        case "T", "t":
            var sound5 = new Audio("sounds/sound5.mp3")
            sound5.play();
        break;

        case "Y", "y":
            var sound6 = new Audio("sounds/sound6.mp3")
            sound6.play();
        break;

        case "U", "u":
            var sound7 = new Audio("sounds/sound7.mp3")
            sound7.play();
        break;

        case "I", "i":
            var sound8 = new Audio("sounds/sound8.mp3")
            sound8.play();
        break;

        case "O", "o":
            var sound9 = new Audio("sounds/sound9.mp3")
            sound9.play();
        break;

        case "P", "p":
            var sound10 = new Audio("sounds/sound10.mp3")
            sound10.play();
        break;

        case "A", "a":
            var sound11 = new Audio("sounds/sound11.mp3")
            sound11.play();
        break;

        case "S", "s":
            var sound12 = new Audio("sounds/sound12.mp3")
            sound12.play();
        break;

        case "D", "d":
            var sound13 = new Audio("sounds/sound13.mp3")
            sound13.play();
        break;

        case "F", "f":
            var sound14 = new Audio("sounds/sound14.mp3")
            sound14.play();
        break;

        case "G", "g":
            var sound15 = new Audio("sounds/sound15.mp3")
            sound15.play();
        break;

        case "H", "h":
            var sound16 = new Audio("sounds/sound16.mp3")
            sound16.play();
        break;

        case "J", "j":
            var sound17 = new Audio("sounds/sound17.mp3")
            sound17.play();
        break;

        case "K", "k":
            var sound18 = new Audio("sounds/sound18.mp3")
            sound18.play();
        break;

        case "L", "l":
            var sound19 = new Audio("sounds/sound19.wav")
            sound19.play();
        break;

        case "Z", "z":
            var sound20 = new Audio("sounds/sound20.wav")
            sound20.play();
        break;

        case "X", "x":
            var sound21 = new Audio("sounds/sound21.wav")
            sound21.play();
        break;

        case "C", "c":
            var sound22 = new Audio("sounds/sound22.wav")
            sound22.play();
        break;

        case "V", "v":
            var sound23 = new Audio("sounds/sound23.wav")
            sound23.play();
        break;

        case "B", "b":
            var sound24 = new Audio("sounds/sound24.wav")
            sound24.play();
        break;

        case "N", "n":
            var sound25 = new Audio("sounds/sound25.wav")
            sound25.play();
        break;

        case "M", "m":
            var sound26 = new Audio("sounds/sound26.wav")
            sound26.play();
        break;
    }
}
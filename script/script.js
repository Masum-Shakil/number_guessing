let triggerButton = document.querySelector('#triggerButton');
let output = document.querySelector('#output');
let max = 10;
let min = 1;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
triggerButton.addEventListener('click', gameFunction);
let divElement = document.createElement("div");

function gameFunction() {
    let item = 1;

    while (item <= 3) {
        let guessNumber = prompt(`Enter your guessing number for the atempt ${item}`);

        if (item === 3) {

            if (guessNumber === randomNumber) {
                divElement.className = "alert alert-success";
                divElement.textContent = "Inputted number is correct and you have won";
                output.appendChild(divElement);
            } else {
                divElement.className = "alert alert-danger";
                divElement.textContent = "You lost and game is over and the correct answer is "+  randomNumber;
                output.appendChild(divElement);
            }
        } else if (guessNumber < randomNumber) {
            alert("Inputted number is smaller");
        } else if (guessNumber > randomNumber){
            alert("Inputted number is greater");
        } else if (guessNumber == randomNumber) {
            divElement.className = "alert alert-success";
            divElement.textContent = "Inputted number is correct and you have won";
            output.appendChild(divElement);
            break;
        }

        item++;
    }
}
let input = document.getElementById('guessInput');
let btn = document.getElementById('btn');
let stat = document.getElementById('statement');
let num = document.getElementById('numGuess');

let answer = Math.floor(Math.random() * 100) + 1
console.log(answer);

let cnt = 0;

btn.addEventListener('click', function () {
    guessInput();
});

function guessInput() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        stat.innerHTML = "Wrong Input!, Please enter a valid number between 1 and 100!";
        stat.style.color = 'darkred';
    }
    else {
        cnt++;
        num.innerHTML = "Number of Guesses: " + cnt;

        if (input.value < answer) {
            stat.innerHTML = "Try a HIGHER number!";
            stat.style.color = 'darkred';
        }
        else if (input.value > answer) {
            stat.innerHTML = "Try a LOWER number!";
            stat.style.color = 'darkred';
        }
        else {

            stat.innerHTML = "Congrataulations!! You have guessed the correct number!";
            stat.style.color = 'green';
            num.style.color = 'lightgreen';
            setTimeout(() => {
                resetGame();
            },5000);

        }
    }
}

function resetGame() {
    cnt=0;
    num.innerHTML = "Number of Guesses: 0" 
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = '';
}
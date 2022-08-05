let randomNumber = Math.floor(Math.random() * 100) + 1;
// form element values 
const guessField = document.querySelector('.guess-field');
const guessSubmit = document.querySelector('.guess-submit');


// result paragraphs values 

const preGuess = document.querySelector('.prev-guess');
const lastMsg = document.querySelector('.last-msg');
const highLow = document.querySelector('.high-low');
const countLeft = document.querySelector('.count-left');

let count = 1;
let resetButtom;

function checkGuess() {
    let userGuess = Number(guessField.value);

    if( count === 1) {
        preGuess.textContent = 'Previous Guess: ';
        
    }

    preGuess.textContent += userGuess + ' ';

    if( userGuess === randomNumber ){
        preGuess.textContent = '';
        lastMsg.textContent = 'Congratulations! you guess it right.';
        lastMsg.style.backgroundColor = 'green';
        highLow.textContent = '';
        setGameOver();
    } else if(count === 10) {
        lastMsg.textContent = '!!!GAME OVER !!!';
        lastMsg.style.backgroundColor = 'red';
        highLow.textContent = '';
        setGameOver();
    }
    else{
        let left = 10 - count ;
        countLeft.textContent = 'Count left :' +  left; 
        lastMsg.textContent = 'wrong';
        lastMsg.style.backgroundColor = 'red';
        if( userGuess > randomNumber) {
            highLow.textContent = 'last guess was too high';
        }
        else{
            highLow.textContent = 'last guess was too low';
        }

    }

    count++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    guessField.disabled = 'true';
    guessSubmit.disabled = 'true';
    countLeft.textContent = '';
    resetButtom = document.createElement('button');
    resetButtom.textContent = 'Restart Game';
    const outerContent =  document.querySelector('.outer-content');
    outerContent.appendChild(resetButtom);
    // document.body.appendChild(resetButtom);
    resetButtom.addEventListener('click', resetGame);
}

function resetGame() {
    count =1;

    const resultParas = document.querySelectorAll('.resultparas p');
    for(const paras of resultParas) {
        paras.textContent = '';
    }

    resetButtom.parentNode.removeChild(resetButtom);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    preGuess.textContent = '';
    guessField.value = '';
    guessField.focus();
    lastMsg.textContent = '';
    lastMsg.style.backgroundColor = 'white';
    randomNumber = math.floor(Math.random* 100) + 1;
}
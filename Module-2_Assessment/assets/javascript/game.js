let wordList = ["glee", "rachel", "artie", "sheuster","journey", "star"];
let currentWord = wordList.shift();
let currentArray = [];
    for(let i =0;i<currentWord.length;i++){
        currentArray[i] = "_";
    }
let wins = 0;
let guesses = 12;
let guessedLetters = [];
let guessedLettersDisplay = "";
let wordElement = document.querySelector("#word");
let guessElement = document.querySelector("#guesses");
let winElement = document.querySelector("#wins");
let wrongElement = document.querySelector("#wrong");
let fill = "";
for(let i =0;i<currentArray.length;i++){
    fill += currentArray[i] + " ";
}

const startGame = function (event){
    wordElement.innerText = fill;
    guessElement.innerText = guesses;
    winElement.innerText = wins;
}

const checkLetters = function (event){
    let key = event.key;
    if(guessedLetters.includes(key))
        return;
    if(currentWord.includes(key)){
        guessedLetters.push(key);
        fill = "";
        for(let i=0; i<currentWord.length;i++){
            if(currentWord[i]===key) {
                currentArray[i]=key;
            }
            fill += currentArray[i] + " ";
        }
        wordElement.innerText=fill;
        if (!fill.includes("_")){
            wins++;
            winElement.innerText = wins;
            guessedLetters = [];
            guessedLettersDisplay = "";
            wrongElement.innerText = guessedLetters;
            guesses = 12;
            guessElement.innerText = guesses;
            currentWord = wordList.shift();
            currentArray = [];
            for(let i =0;i<currentWord.length;i++){
                currentArray[i] = "_";
            }
            fill = "";
            for(let i =0;i<currentArray.length;i++){
                fill += currentArray[i] + " ";
            }
            wordElement.innerText = fill;
        }
    }
    else{
        guessedLetters.push(key);
        guessedLettersDisplay += key + " ";
        wrongElement.innerText = guessedLettersDisplay;
        guesses--;
        guessElement.innerText = guesses;
        if(guesses===0){
            alert("Oh no you're out of guesses! Let's try it again.");
            guessedLetters = [];
            guessedLettersDisplay = "";
            wrongElement.innerText = guessedLetters;
            guesses = 12;
            guessElement.innerText = guesses;
            currentWord = wordList.shift();
            currentArray = [];
            for(let i =0;i<currentWord.length;i++){
                currentArray[i] = "_";
            }
            fill = "";
            for(let i =0;i<currentArray.length;i++){
                fill += currentArray[i] + " ";
            }
            wordElement.innerText = fill;
        }
    }
}

document.addEventListener('keyup',startGame);
document.addEventListener('keyup',checkLetters);
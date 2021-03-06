const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const thirdNumber = document.getElementById("third-number");
const fourthNumber = document.getElementById("fourth-number");

const container = document.querySelector(".container");
const chart = document.querySelector(".chart");

const ul = document.querySelectorAll("ul");

const guessButton = document.getElementById("guess");

const options = document.querySelector(".options");

const start = document.querySelector(".start");

const winMessage = document.querySelector("h1");

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let secretNumber;
let numberOfGuesses = 0;

// shuffles numbers in the array (0 - 9)
const shuffle = (arr) => {
  let i = arr.length, j = 0, temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // returns four numbers
  return arr.slice(0, 4);
}

const restartGame = () => {

  // make sure the player actually wants to restart the game
  swal("Are you sure you want to restart your game? ", {
    buttons: {
        yes: true,
        cancel: "Continue",
      },
  })
  .then((value) => {
    switch (value) {
      case "yes":
        // generate a new number
        secretNumber = shuffle(arr);

        // clear # of guesses
        numberOfGuesses = 0;

        // reset numbers guessed
        firstNumber.innerHTML = 0;
        secondNumber.innerHTML = 0;
        thirdNumber.innerHTML = 0;
        fourthNumber.innerHTML = 0;

        // clear the screen : delete all lis created
        ul[0].innerHTML = "";
        ul[1].innerHTML = "";
        ul[2].innerHTML = "";

        // incase if the player is restarting the game after winning...
        winMessage.style.visibility = "hidden";
        guessButton.disabled = "";

        break;
    }
  })
}

const startGame = (e) => {
  container.style.display = "";
  // guessButton.style.display = "block";
  // restartButton.style.display = "";
  options.style.display = "";
  chart.style.display = "";
  start.style.display = "none";

  // generates the 4 secret numbers that player is going to guess
  secretNumber = shuffle(arr);
}

const holdButton = (e) => {
  guessButton.style.border = "inset";
}

const releaseHold = (e) => {
  guessButton.style.border = "outset";
}

const incrementNumber = (e) => {
  let currentNumber;

  if (e === "first-number") {
    currentNumber = Number(firstNumber.innerHTML);

    if (currentNumber === 9) {
      currentNumber = 0;
      firstNumber.innerHTML = currentNumber;
    } else {
      currentNumber += 1;
      firstNumber.innerHTML = currentNumber;
    }

  } else if (e === "second-number") {
    currentNumber = Number(secondNumber.innerHTML);

    if (currentNumber === 9) {
      currentNumber = 0;
      secondNumber.innerHTML = currentNumber;
    } else {
      currentNumber += 1;
      secondNumber.innerHTML = currentNumber;
    }

  } else if (e === "third-number") {
    currentNumber = Number(thirdNumber.innerHTML);

    if (currentNumber === 9) {
      currentNumber = 0;
      thirdNumber.innerHTML = currentNumber;
    } else {
      currentNumber += 1;
      thirdNumber.innerHTML = currentNumber;
    }
  } else if (e === "fourth-number" || currentNumber === 0) {
    currentNumber = Number(fourthNumber.innerHTML);

    if (currentNumber === 9) {
      currentNumber = 0;
      fourthNumber.innerHTML = currentNumber;
    } else {
      currentNumber += 1;
      fourthNumber.innerHTML = currentNumber;
    }
  }
}

const decrementNumber = (e) => {
  let currentNumber;

  if (e === "first-number") {
    currentNumber = Number(firstNumber.innerHTML);

    if (currentNumber === 0) {
      currentNumber = 9;
      firstNumber.innerHTML = currentNumber;
    } else {
      currentNumber -= 1;
      firstNumber.innerHTML = currentNumber;
    }

  } else if (e === "second-number") {
    currentNumber = Number(secondNumber.innerHTML);

    if (currentNumber === 0) {
      currentNumber = 9;
      secondNumber.innerHTML = currentNumber;
    } else {
      currentNumber -= 1;
      secondNumber.innerHTML = currentNumber;
    }
  } else if (e === "third-number") {
    currentNumber = Number(thirdNumber.innerHTML);

    if (currentNumber === 0) {
      currentNumber = 9;
      thirdNumber.innerHTML = currentNumber;
    } else {
      currentNumber -= 1;
      thirdNumber.innerHTML = currentNumber;
    }
  } else if (e === "fourth-number") {
    currentNumber = Number(fourthNumber.innerHTML);

    if (currentNumber === 0) {
      currentNumber = 9;
      fourthNumber.innerHTML = currentNumber;
    } else {
      currentNumber -= 1;
      fourthNumber.innerHTML = currentNumber;
    }
  }
}

const displayWinMessage = () => {
  winMessage.style.visibility = "";
}

const updatePlayerGuesses = (count, playerGuess) => {
  const { fishes, bites } = count;
  const playerGuessStr = playerGuess.join(' ').trim();

  // 1 - number of Guess
  const li1 = document.createElement("li");
  li1.innerHTML = numberOfGuesses;
  ul[0].appendChild(li1);

  // 2 - player guess
  const li2 = document.createElement("li");
  li2.innerHTML = playerGuessStr;
  ul[1].appendChild(li2);

  // 3 - fishes and bites
  const li3 = document.createElement("li");
  li3.innerHTML = `${fishes} Fishes ${bites} Bites`;
  ul[2].appendChild(li3);

  if (fishes === 4) {
    displayWinMessage();
    guessButton.disabled = "true";
  }
}

const guessNumber = () => {
  numberOfGuesses += 1;

  let firstNumberGuessed = Number(firstNumber.innerHTML);
  let secondNumberGuessed = Number(secondNumber.innerHTML);
  let thirdNumberGuessed = Number(thirdNumber.innerHTML);
  let fourthNumberGuessed = Number(fourthNumber.innerHTML);

  let playerGuess = [firstNumberGuessed, secondNumberGuessed,
    thirdNumberGuessed, fourthNumberGuessed];

  const count = {
    fishes: 0,
    bites: 0,
  };

  for (let i = 0; i < secretNumber.length; i++) {
    let searchBite = secretNumber.indexOf(playerGuess[i]) != -1;
    if (secretNumber[i] === playerGuess[i]) {
      count.fishes += 1;
    } else if (searchBite) {
      count.bites += 1;
    }
  }

  // have a function update the player's current guesses and display it
  // 1. the number of guesses so far
  // 2. the player's guess
  // 3. the current fish and bite count
  updatePlayerGuesses(count, playerGuess);
}

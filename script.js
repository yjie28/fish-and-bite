const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const thirdNumber = document.getElementById("third-number");
const fourthNumber = document.getElementById("fourth-number");

const container = document.querySelector(".container");

const guessButton = document.getElementById("guess");
const startButton = document.getElementById("start");


const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let random4Nums;

// shuffles numbers in the array (0 - 9)
const shuffle = (arr) => {
  let i = arr.length, j = 0, temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.slice(0, 4);
}


const startGame = (e) => {
  container.style.display = "";
  guessButton.style.display = "block";
  startButton.style.display = "none";

  // generates the 4 random numbers that player is going to guess
  random4Nums = shuffle(arr);
  console.log(random4Nums);
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

const guessNumber = () => {
  let firstNumberGuessed = Number(firstNumber.innerHTML);
  let secondNumberGuessed = Number(secondNumber.innerHTML);
  let thirdNumberGuessed = Number(thirdNumber.innerHTML);
  let fourthNumberGuessed = Number(fourthNumber.innerHTML);

  // let numbersGuessed = [firstNumberGuessed, secondNumberGuessed, thirdNumberGuessed, fourthNumberGuessed];

  if (firstNumberGuessed === random4Nums[0] &&
    secondNumberGuessed === random4Nums[1] &&
    thirdNumberGuessed === random4Nums[2] &&
    fourthNumberGuessed === random4Nums[3]) {
      console.log("Congrats you guessed the right number!!!");
    } else {
      console.log("Please try again!");
    }

}

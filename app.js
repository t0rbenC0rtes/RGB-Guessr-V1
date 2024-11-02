let userGuess;
let randomColor;
let r;
let g;
let b;
let redValue;
let greenValue;
let blueValue;
let guessLabel;
let count;

window.addEventListener("DOMContentLoaded", () => {
  const randomizeButton = document.getElementById("randomizeButton");
  const guessButton = document.getElementById("guessButton");

  const redSlider = document.getElementById("redSlider");
  const greenSlider = document.getElementById("greenSlider");
  const blueSlider = document.getElementById("blueSlider");

  guessLabel = document.getElementById("YourGuess").querySelector("label");

  randomizeButton.addEventListener("click", () => {
    randomColor = randomRGB();
    const mainElement = document.querySelector("main");

    mainElement.style.backgroundColor = randomColor[0];
    mainElement.classList.add("animateShuffle");
    setTimeout(() => {
      mainElement.classList.remove("animateShuffle");
    }, 1300);
    document.body.style.backgroundImage = `linear-gradient(to right,${randomColor[0]}, ${randomColor[1]})`;
    randomizeButton.style.backgroundColor = randomColor[1];
    guessButton.style.backgroundColor = randomColor[1];
    guessLabel.style.color = randomColor[1];
    guessLabel.textContent = "This is your guess";
    const CheckMarks = document.getElementsByClassName("CheckMark");
    for (let i = 0; i < CheckMarks.length; i++) {
      CheckMarks[i].textContent = ""; // Reset each checkmark
    }
  });

  guessButton.addEventListener("click", () => {
    redValue = redSlider.value;
    greenValue = greenSlider.value;
    blueValue = blueSlider.value;

    const userGuess = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    

    let showGuess = `rgb(${(redValue / 25) * 255}, ${
      (greenValue / 25) * 255
    }, ${(blueValue / 25) * 255})`;
    YourGuess.style.backgroundColor = showGuess;
    checkGuess(userGuess);
  });
});

function randomRGB() {
  r = Math.floor(Math.random() * 25) + 1; // Value between 1 and 15
  g = Math.floor(Math.random() * 25) + 1; // Value between 1 and 15
  b = Math.floor(Math.random() * 25) + 1; // Value between 1 and 15

  // Convert to full 255 scale for display
  const rgbDisplay = `rgb(${(r / 25) * 255}, ${(g / 25) * 255}, ${
    (b / 25) * 255
  })`;
  // Count reset
  count = 0;
  // Randomize button color
  let rr = b;
  let bb = r;
  let gg = 255 - g;
  const buttonDisplay = `rgb(${(rr / 25) * 255}, ${(gg / 25) * 255}, ${
    (bb / 25) * 255
  })`;

  // Return the display colors for use in UI
  return [rgbDisplay, buttonDisplay];
}

function checkGuess(userGuess) {
  console.log("User's RGB Guess: ", userGuess);
  let finalGuess = `rgb(${r}, ${g}, ${b})`;
  console.log("Secret color : ", finalGuess);
  count += 1;
  const luminosity = document.querySelector("#lumispan");
    let lumi = parseInt((((r/ 25) * 255) + ((g/ 25) * 255) + ((b/ 25) * 255)) / 3);
    luminosity.textContent = `${lumi}`;

  guessLabel = document.getElementById("YourGuess").querySelector("label");

  if (r == redSlider.value) {
    redCheckMark.textContent = "☑";
    guessLabel.textContent = "R checks out!";
  } else {
    redCheckMark.textContent = "";
  }

  if (g == greenSlider.value) {
    greenCheckMark.textContent = "☑";
    guessLabel.textContent = "G checks out!";
  } else {
    greenCheckMark.textContent = "";
  }

  if (b == blueSlider.value) {
    blueCheckMark.textContent = "☑";
    guessLabel.textContent = "B checks out!";
  } else {
    blueCheckMark.textContent = "";
  }

  if (r == redSlider.value && g == greenSlider.value) {
    redCheckMark.textContent = "☑";
    greenCheckMark.textContent = "☑";
    guessLabel.textContent = "R & G check out!";
  }

  if (g == greenSlider.value && b == blueSlider.value) {
    greenCheckMark.textContent = "☑";
    blueCheckMark.textContent = "☑";
    guessLabel.textContent = "G & B check out!";
  }

  if (b == blueSlider.value && r == redSlider.value) {
    blueCheckMark.textContent = "☑";
    redCheckMark.textContent = "☑";
    guessLabel.textContent = "R & B check out!";
  }

  if (userGuess === finalGuess) {
    guessLabel.textContent = `You found RGB in ${count} tries, GG !`;
  }
}




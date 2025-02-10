const colorBox = document.getElementById("color-box");
const colorCode = document.getElementById("color-code");

// TODO:
// -

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`; // Ensure hex code has 6 characters
};

const setRandomBoxColor = () => {
  const randomColor = getRandomColor();

  colorBox.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;

  console.log("Color changed to:", randomColor);
};

colorBox.addEventListener("click", setRandomBoxColor);

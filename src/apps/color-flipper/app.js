const colorBox = document.getElementById("color-box");
const colorCode = document.getElementById("color-code");
const hexInput = document.getElementById("hex-input");
const hexButton = document.getElementById("hex-button");

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`; // Ensure hex code has 6 characters
};

const setColor = (hexValue) => {
  colorBox.style.backgroundColor = hexValue;
  colorCode.textContent = hexValue;
  hexInput.value = hexValue;
};

const setRandomColor = () => {
  const randomColor = getRandomColor();
  setColor(randomColor);
};

const setHexColor = () => {
  setColor(hexInput.value);
}

colorBox.addEventListener("click", setRandomColor);
hexButton.addEventListener("click", setHexColor);

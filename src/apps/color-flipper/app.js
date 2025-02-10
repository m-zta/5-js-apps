const colorBox = document.getElementById("color-box");
const colorCode = document.getElementById("color-code");

const setRandomBoxColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  colorBox.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;

  console.log("Color changed to:", randomColor);
};

colorBox.addEventListener("click", () => {
  setRandomBoxColor();
});

const colorButton = document.getElementById("color-button");

let count = 0;

colorButton.addEventListener("click", () => {
  console.log(count++);
});

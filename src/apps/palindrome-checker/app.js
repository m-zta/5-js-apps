const wordInput = document.getElementById("word-input");
const checkButton = document.getElementById("check-button");
const resultText = document.getElementById("result-text");

const positiveResult = "Palindrome! ✅";
const negativeResult = "No Palindrome ❌";

const isPalindrome = (phrase) => {
  return true;
};

const checkPhrase = (phrase) => {
  console.log("Checking phrase:");
  console.log(phrase);
  if (isPalindrome(phrase)) {
    resultText.textContent = positiveResult;
  } else {
    resultText.textContent = negativeResult;
  }
};

checkButton.addEventListener("click", checkPhrase(wordInput.innerText.trim));

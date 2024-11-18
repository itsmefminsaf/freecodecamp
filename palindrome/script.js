const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDisplay = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const text = textInput.value;
  if (text === "") {
    alert("Please input a value");
  } else {
    const result = checkPalindrome(text);
    if (result) {
      resultDisplay.textContent = `${text} is a palindrome`;
    } else {
      resultDisplay.textContent = `${text} is not a palindrome`;
    }
  }
});

const checkPalindrome = (word) => {
  const cleanedText = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let index = 0; index < cleanedText.length; index++) {
    if (cleanedText[index] !== cleanedText[cleanedText.length - index - 1]) {
      return false;
    }
  }
  return true;
};

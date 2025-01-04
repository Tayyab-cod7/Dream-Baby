// Header Text changing animation starts

const changingText = document.getElementById('changing-text');
const textArray = ["shirts", "shorts", "pants", "shoes", "socks", "&more"];
let currentIndex = 0;

function typeEffect(text) {
  changingText.textContent = ''; // Clear the current text in the span
  let charIndex = 0;
  let isTyping = true; // Flag to prevent overlap

  function typeLetter() {
    if (charIndex < text.length) {
      changingText.textContent += text[charIndex]; // Add one character at a time
      charIndex++;
      setTimeout(typeLetter, 150); // Adjust speed by changing the timeout duration
    }
  }

  // Start typing the first word
  typeLetter();

  // When the word is completely typed, start clearing it and typing the next word
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % textArray.length;
    setTimeout(() => {
      typeEffect(textArray[currentIndex]); // Start typing the next word after a delay
    }, 1000); // Delay before changing the text
  }, text.length * 150 + 1000); // Delay for the next word to start typing after the first one finishes
}

// Start the animation
typeEffect(textArray[currentIndex]);

// Header Text changing animation ends




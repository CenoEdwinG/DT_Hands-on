// Get references to the input box and the display area
const input = document.getElementById("textInput");
const countDisplay = document.getElementById("charCount");

// Add an event listener that triggers every time the input changes
input.addEventListener("input", () => {
  countDisplay.textContent = input.value.length; // Update the displayed character count based on input length
});

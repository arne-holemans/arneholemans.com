
//dropdown menu for mobile
function toggleDropdown() {
  var dropdown = document.querySelector('.dropdown-content');
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

// Function to get the current date in the format YYYY-MM-DD
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();

  return `${year}`;
}

// Function to update the content of the currentDate span
function updateCurrentDate() {
  const currentDateElement = document.getElementById('currentYear');
  if (currentDateElement) {
    currentDateElement.textContent = getCurrentDate();
  }
}

// Call the updateCurrentDate function when the page loads
window.onload = function () {
  updateCurrentDate();
};







// List of words to display
var wordsList = ["Enthusiastic about cybersecurity", "Enthusiastic about technology", "Enthusiastic about coffee", "Enthusiastic about watches"];

// Index to keep track of the current word
var currentIndex = 0;

// Function to update the text content
function updateText() {
    // Get the element by its ID
    var changingTextElement = document.getElementById("changingText");

    // Update the text content with the current word
    changingTextElement.textContent = wordsList[currentIndex];

    // Increment the index, and reset to 0 if it exceeds the length of the list
    currentIndex = (currentIndex + 1) % wordsList.length;
}

// Call the updateText function every 5 seconds
setInterval(updateText, 2000);

// Initial call to set the text immediately when the page loads
updateText();

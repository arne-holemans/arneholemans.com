
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

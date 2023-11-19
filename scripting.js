function switchLanguage(language) {
    document.querySelectorAll('[lang]').forEach(element => {
      if (element.getAttribute('lang') === language) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  }

  function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }

  // Initially, hide content in Dutch
  switchLanguage('en');
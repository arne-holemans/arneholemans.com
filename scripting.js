function switchLanguage(language) {
    document.querySelectorAll('[lang]').forEach(element => {
      if (element.getAttribute('lang') === language) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  }

  // Initially, hide content in Dutch
  switchLanguage('en');
  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }


  document.getElementById('portfolio-page').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection('#portfolio');
  });

  document.getElementById('contact-page').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection('#contact');
  });
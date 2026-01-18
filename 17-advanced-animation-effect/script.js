window.addEventListener('scroll', function () {
    const cards = document.querySelectorAll('.card');
    const scrollPosition = window.scrollY + window.innerHeight;
    cards.forEach(card => {
      if (scrollPosition > card.offsetTop + 100) {
        card.classList.add('animate');
      } else {
        card.classList.remove('animate');
      }
    });
  });
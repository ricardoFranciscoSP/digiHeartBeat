document.addEventListener("DOMContentLoaded", () => {
  // Função para verificar se elemento está visível na viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Função para animar todos os cards
  function animateAllCards() {
    const cards = document.querySelectorAll("#card1, #card2, #card3, #card4");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("fade-in-up");
      }, index * 200); // Delay entre cada card
    });
  }

  // Função para verificar o primeiro card e animar todos
  function checkFirstCardAndAnimate() {
    const firstCard = document.querySelector("#card1");
    if (firstCard && isElementInViewport(firstCard)) {
      animateAllCards();
      // Remove o listener após a animação
      window.removeEventListener("scroll", checkFirstCardAndAnimate);
    }
  }

  // Adiciona listener para scroll
  window.addEventListener("scroll", checkFirstCardAndAnimate);

  // Verifica posição inicial
  checkFirstCardAndAnimate();
});

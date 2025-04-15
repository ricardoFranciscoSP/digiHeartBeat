document.addEventListener("DOMContentLoaded", () => {
  // Função para verificar se elemento está parcialmente visível na viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // Verifica se o elemento está parcialmente visível
    return (
      rect.top <= windowHeight * 0.8 && // 80% da altura da janela
      rect.left <= windowWidth &&
      rect.bottom >= 0 &&
      rect.right >= 0
    );
  }

  // Função para animar todos os cards
  function animateAllCards() {
    const cards = document.querySelectorAll("#card1, #card2, #card3, #card4");
    cards.forEach((card, index) => {
      if (!card.classList.contains("fade-in-up")) {
        setTimeout(() => {
          card.classList.add("fade-in-up");
        }, index * 200);
      }
    });
  }

  // Função para verificar os cards e animar
  function checkCardsAndAnimate() {
    const cards = document.querySelectorAll("#card1, #card2, #card3, #card4");
    let shouldAnimate = false;

    cards.forEach((card) => {
      if (isElementInViewport(card)) {
        shouldAnimate = true;
      }
    });

    if (shouldAnimate) {
      animateAllCards();
    }
  }

  // Adiciona listeners para scroll e resize
  window.addEventListener("scroll", checkCardsAndAnimate);
  window.addEventListener("resize", checkCardsAndAnimate);

  // Verifica posição inicial
  checkCardsAndAnimate();
});

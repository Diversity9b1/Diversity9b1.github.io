document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.slider-card');
  var modalEl = document.getElementById('cardModal');
  if (!cards.length || !modalEl) return;

  function openCard(card) {
    modalEl.style.setProperty('--modal-accent', card.getAttribute('data-accent') || '#e07a5f');
    var iconEl = document.getElementById('modalIcon');
    var titleEl = document.getElementById('modalTitle');
    var textEl = document.getElementById('modalText');
    if (iconEl) iconEl.className = 'bi ' + (card.getAttribute('data-icon') || 'bi-star-fill') + ' modal-icon';
    if (titleEl) titleEl.textContent = card.getAttribute('data-title') || '';
    if (textEl) textEl.textContent = card.getAttribute('data-text') || '';
    bootstrap.Modal.getOrCreateInstance(modalEl).show();
  }

  cards.forEach(function (card) {
    card.addEventListener('click', function () { openCard(card); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCard(card);
      }
    });
  });
});
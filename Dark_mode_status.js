
// DARK MODE

let isDarkMode = false;          // Variabile globale


function toggleTheme() {
  isDarkMode = !isDarkMode;

  document.body.classList.toggle('dark-mode', isDarkMode);     // Attiva/disattiva dark mode

  // Seleziona il footer correttamente
  const footer = document.querySelector('footer');
  if (footer) {
    footer.classList.toggle('dark-mode', isDarkMode);          // Attiva/disattiva dark mode
  }

  localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');    // Salva lo stato in localStorage
}


// CHECK DARK MODE STATUS when START page
// All'avvio della pagina, recupera stato darkMode
//  localStorage, consente di salvare dati nel browser in modo persistente anche dopo il refresh o il cambio pagina.
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  const footer = document.querySelector('footer');

  if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
    if (footer) footer.classList.add('dark-mode');
    isDarkMode = true;
  } else {
    document.body.classList.remove('dark-mode');
    if (footer) footer.classList.remove('dark-mode');
    isDarkMode = false;
  }
});



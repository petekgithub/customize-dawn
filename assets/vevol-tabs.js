function showTabContent(tabButton, tabId) {
  // Tüm tab butonlarının aktiflik özelliğini kaldır
  let tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function (button) {
    button.classList.remove('active');
  });

  // Tüm tab içeriklerini gizle
  let tabContents = document.querySelectorAll('.tab-content div');
  tabContents.forEach(function (content) {
    content.style.display = 'none';
  });

  // Tıklanan tab butonunu aktif yap
  tabButton.classList.add('active');

  // İlgili tab içeriğini göster
  let tabContent = document.getElementById(tabId);
  if (tabContent) {
    tabContent.style.display = 'block'; // contenti göster
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // İlk tabı varsayılan olarak göster
  let defaultTabButton = document.querySelector('.tab-button');
  let defaultTabId = defaultTabButton.getAttribute('data-tab-id');
  showTabContent(defaultTabButton, defaultTabId);
});

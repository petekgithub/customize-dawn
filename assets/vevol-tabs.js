function showTabContent(tab) {
  let tabIndex = tab.getAttribute('data-tab');

  // Tüm tab butonlarının aktiflik özelliğini kaldır
  let tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function (button) {
    button.classList.remove('active');
  });

  // Tüm tab içeriklerini gizle
  let tabContents = document.querySelectorAll('.content');
  tabContents.forEach(function (content) {
    content.style.display = 'none';
  });

  // Tıklanan tab butonunu aktif yap
  tab.classList.add('active');

  // İlgili tab içeriğini göster
  let tabContent = document.querySelector('.content[data-tab="' + tabIndex + '"]');
  if (tabContent) {
    tabContent.style.display = 'block'; // İlgili tab içeriğini göster
  }
}

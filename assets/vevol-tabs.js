function showTabContent(tab) {
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
  var tabContentId = tab.getAttribute('data-tab');
  var tabContent = document.querySelector('.content[data-tab="' + tabContentId + '"]');
  tabContent.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  // İlk tabı varsayılan olarak göster
  var defaultTabButton = document.querySelector('.tab-button');
  showTabContent(defaultTabButton);
});

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.inner-content');

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Tüm içerikleri gizle
      tabContents.forEach((content) => {
        content.classList.remove('active');
      });

      // Tüm tab butonlarının aktif durumlarını kaldır
      tabButtons.forEach((btn) => {
        btn.classList.remove('active');
      });

      // Tıklanan tab butonunu aktif hale getir
      button.classList.add('active');

      // İlgili içeriği göster
      tabContents[index].classList.add('active');
    });
  });
});

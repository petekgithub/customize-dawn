document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.inner-content');

  // İlk tabı ve içeriğini aktif yap
  tabButtons[0].classList.add('active');
  tabButtons[0].style.backgroundColor = 'white';
  tabContents[0].classList.add('active');

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Tüm içerikleri gizle
      tabContents.forEach((content) => {
        content.classList.remove('active');
      });

      // Tüm tab butonlarının aktif durumlarını kaldır
      tabButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.style.backgroundColor = ''; // Tüm tab butonlarının arka plan rengini temizle
      });

      // Tıklanan tab butonunu ve içeriğini aktif hale getir
      button.classList.add('active');
      button.style.backgroundColor = 'white'; // Tıklanan tabın arka plan rengini beyaz yap
      tabContents[index].classList.add('active');
    });
  });
});

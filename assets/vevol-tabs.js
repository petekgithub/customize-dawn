document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.inner-content');

  function showTabContent(tabNum) {
    tabContents.forEach((content) => {
      content.classList.remove('active');
    });
    document.querySelector(`.inner-content[data-tab="${tabNum}"]`).classList.add('active');
  }

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabNum = button.dataset.tab;
      console.log('click yapıldı: ' + tabNum);

      // Deactivate all tab buttons and content
      tabButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.style.backgroundColor = ''; // Reset background color
      });

      // Activate the clicked tab button
      button.classList.add('active');
      button.style.backgroundColor = '#ffffff'; // Set background color to white

      // Show the corresponding tab content
      showTabContent(tabNum);
    });
  });
});

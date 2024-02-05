document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.inner-content');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabNum = button.dataset.tab;

      // Deactivate all tab buttons and content
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));

      // Activate the clicked tab button and content
      button.classList.add('active');
      document.querySelector(`.inner-content[data-tab="${tabNum}"]`).classList.add('active');

      // Change background color of active button
      tabButtons.forEach((btn) => {
        if (btn.classList.contains('active')) {
          btn.style.backgroundColor = '#ffffff'; // Set background color to white
        } else {
          btn.style.backgroundColor = ''; // Reset background color
        }
      });
    });
  });
});

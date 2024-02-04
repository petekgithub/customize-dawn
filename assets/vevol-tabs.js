document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-pane');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabNum = button.dataset.tab;

      // Deactivate all tab buttons and content
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));

      // Activate the clicked tab button and content
      button.classList.add('active');
      document.querySelector(`.tab-pane[data-tab="${tabNum}"]`).classList.add('active');
    });
  });
});

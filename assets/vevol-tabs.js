document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.content');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabNum = button.dataset.tab;

      // Deactivate all tab buttons and content
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));

      // Activate the clicked tab button and content
      button.classList.add('active');
      document.querySelector(`.content[data-tab="${tabNum}"]`).classList.add('active');
    });
  });

  // Add click event listeners to tab content for each tab
  tabContents.forEach((content) => {
    content.addEventListener('click', () => {
      const tabNum = content.dataset.tab;

      // Deactivate all tab buttons and content
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));

      // Activate the corresponding tab button and content
      document.querySelector(`.tab-button[data-tab="${tabNum}"]`).classList.add('active');
      content.classList.add('active');
    });
  });
});

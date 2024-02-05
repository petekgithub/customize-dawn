function showTabContent(tab) {
  let tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function (button) {
    button.classList.remove('active');
  });

  let tabContents = document.querySelectorAll('.content');
  tabContents.forEach(function (content) {
    content.style.display = 'none';
  });

  let selectedTabButton = document.querySelector('.tab-button:nth-child(' + (index + 1) + ')');
  if (selectedTabButton) {
    selectedTabButton.classList.add('active');
  }

  let selectedTabContent = document.querySelector('.content:nth-child(' + (index + 1) + ')');
  if (selectedTabContent) {
    selectedTabContent.style.display = 'block';
  }
}

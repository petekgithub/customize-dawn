function showTabContent(tabButton) {
  // Deactivate all tab buttons
  const allTabButtons = document.querySelectorAll('.tab-button');
  allTabButtons.forEach((button) => button.classList.remove('active'));

  // Activate the clicked tab button
  tabButton.classList.add('active');

  // Hide all tab contents
  const allContents = document.querySelectorAll('.content');
  allContents.forEach((content) => (content.style.display = 'none'));

  // Show the corresponding tab content
  const index = Array.from(tabButton.parentNode.children).indexOf(tabButton);
  const tabContents = document.querySelectorAll('.content');
  tabContents[index].style.display = 'block';
}

// function showTabContent(tabButton, tabId) {
//   // remove the active properties from all buttons
//   let tabButtons = document.querySelectorAll('.tab-button');
//   tabButtons.forEach(function (button) {
//     button.classList.remove('active');
//   });

//   // close the all tab contents
//   let tabContents = document.querySelectorAll('.tab-content div');
//   tabContents.forEach(function (content) {
//     content.style.display = 'none';
//   });

//   // activate the tabbutton - clickable one
//   tabButton.classList.add('active');

//   // show the realed content
//   let tabContent = document.getElementById(tabId);
//   if (tabContent) {
//     tabContent.style.display = 'block'; // show the content
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   // show the first tab - like default
//   let defaultTabButton = document.querySelector('.tab-button');
//   let defaultTabId = defaultTabButton.getAttribute('data-tab-id');
//   showTabContent(defaultTabButton, defaultTabId);
// });

// web component

// Define the Web Component
class VevolTabs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Add event listener to handle tab switching
    this.addEventListener('click', this.handleTabClick.bind(this));
    // Show the default tab
    this.showDefaultTab();
  }

  disconnectedCallback() {
    // Remove event listener when the component is removed
    this.removeEventListener('click', this.handleTabClick.bind(this));
  }

  showDefaultTab() {
    // Get the default tab button
    let defaultTabButton = this.querySelector('.tab-button');
    if (defaultTabButton) {
      let defaultTabId = defaultTabButton.getAttribute('data-tab-id');
      this.showTabContent(defaultTabButton, defaultTabId);
    }
  }

  handleTabClick(event) {
    // Check if clicked element is a tab button
    if (event.target.classList.contains('tab-button')) {
      let tabButton = event.target;
      let tabId = tabButton.getAttribute('data-tab-id');
      this.showTabContent(tabButton, tabId);
    }
  }

  showTabContent(tabButton, tabId) {
    // Remove 'active' class from all tab buttons
    let tabButtons = this.querySelectorAll('.tab-button');
    tabButtons.forEach(function (button) {
      button.classList.remove('active');
    });

    // Hide all tab contents
    let tabContents = this.querySelectorAll('.tab-content div');
    tabContents.forEach(function (content) {
      content.style.display = 'none';
    });

    // Add 'active' class to the clicked tab button
    tabButton.classList.add('active');

    // Show the corresponding tab content
    let tabContent = this.querySelector(`#${tabId}`);
    if (tabContent) {
      tabContent.style.display = 'block';
    }
  }
}

customElements.define('vevol-tabs', VevolTabs);

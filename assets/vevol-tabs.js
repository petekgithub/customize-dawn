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
class VevolTabs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const template = `
      <style>
        /* Your CSS styles for tabs and content here */
      </style>
      <div class="container">
        <div class="tab-buttons">
          <slot name="tab-buttons"></slot>
        </div>
        <div class="tab-content">
          <slot name="tab-content"></slot>
        </div>
      </div>
    `;
    this.shadowRoot.innerHTML = template;
  }

  attachEventListeners() {
    this.shadowRoot.querySelectorAll('.tab-button').forEach((tabButton) => {
      tabButton.addEventListener('click', () => {
        const tabId = tabButton.getAttribute('data-tab-id');
        this.showTabContent(tabId);
      });
    });
  }

  showTabContent(tabId) {
    // Remove 'active' class from all tab buttons
    this.shadowRoot.querySelectorAll('.tab-button').forEach((tabButton) => {
      tabButton.classList.remove('active');
    });

    // Hide all tab contents
    this.shadowRoot.querySelectorAll('.content').forEach((content) => {
      content.style.display = 'none';
    });

    // Add 'active' class to the clicked tab button
    const tabButton = this.shadowRoot.querySelector(`[data-tab-id="${tabId}"]`);
    if (tabButton) {
      tabButton.classList.add('active');
    }

    // Show the corresponding tab content
    const tabContent = this.shadowRoot.getElementById(tabId);
    if (tabContent) {
      tabContent.style.display = 'block';
    }
  }
}

customElements.define('vevol-tabs', VevolTabs);

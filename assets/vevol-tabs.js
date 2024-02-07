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

// Web Component
class VevolTabs extends HTMLElement {
  constructor() {
    super();
    //this.attachShadow({ mode: 'open' }); shadow DOM
    // No shadow DOM attachment needed
  }

  /**
   *  Function mainly serves to attach event listeners after the component is connected to the DOM.
   * This ensures that the event listeners are set up and ready to respond to user interactions.
   * This method is invoked when the element is inserted into the DOM.
   * */
  connectedCallback() {
    // No need for rendering, as HTML markup is provided directly in the HTML template
    this.attachEventListeners();
  }

  //When a tab button is clicked, it triggers the showTabContent()
  attachEventListeners() {
    const tabButtons = this.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab-id');
        this.showTabContent(tabId);
      });
    });
  }

  showTabContent(tabId) {
    const tabButtons = this.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
      button.classList.remove('active');
    });

    const tabContents = this.querySelectorAll('.content');
    tabContents.forEach((content) => {
      content.style.display = 'none';
    });

    const activeButton = this.querySelector(`[data-tab-id="${tabId}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }

    const activeContent = this.querySelector(`#${tabId}`);
    if (activeContent) {
      activeContent.style.display = 'block';
    }
  }
}

customElements.define('vevol-tabs', VevolTabs);

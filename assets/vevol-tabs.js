class VevolTabs extends HTMLElement {
  constructor() {
    super();
    //this.attachShadow({ mode: 'open' }); shadow DOM
  }

  /**
   * This method is invoked when the element is inserted into the DOM.
   * */
  connectedCallback() {
    this.attachEventListeners();
  }

  //When a tab button is clicked, it triggers the showTabContent()
  attachEventListeners() {
    const tabButtons = this.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab-id');
        if (!button.classList.contains('active')) {
          this.showTabContent(tabId);
        }
      });
    });
  }

  //responsible for displaying the content
  showTabContent(tabId) {
    //first removes the active class
    const tabButtons = this.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
      button.classList.remove('active');
    });

    const tabContents = this.querySelectorAll('.content');
    tabContents.forEach((content) => {
      content.style.display = 'none';
    });

    //adds the active class to the clicked tab button
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

//the element available for use in the DOM
customElements.define('vevol-tabs', VevolTabs);

class VevolTabs extends HTMLElement {
  constructor() {
    super();
    //this.attachShadow({ mode: 'open' }); shadow DOM
  }

  connectedCallback() {
    this.attachEventListeners();
  }

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

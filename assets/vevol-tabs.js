class VevolTabs extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', (event) => {
      if (event.target.classList.contains('tab-heading')) {
        this.switchTab(event.target.dataset.tab);
      }
    });
  }
  switchTab(tabName) {
    // hide all tabs
    this.querySelectorAll('.tab').forEach((tab) => {
      tab.classList.remove('active');
    });

    // show the selected tab
    const selectedTab = this.querySelector(`[data-tab="${tabName}"]`);
    if (selectedTab) {
      selectedTab.classList.add('active');
    }
  }
}

customElements.define('vevol-tabs', VevolTabs);

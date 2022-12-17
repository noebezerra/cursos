// Tab Menu
export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.ativo = 'ativo';
  }

  // ativa a tab de acordo com o index
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.ativo);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.ativo, direcao);
  }

  // adicionar os eventos de tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}

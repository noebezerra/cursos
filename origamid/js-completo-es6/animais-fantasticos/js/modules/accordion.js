// Accordion List
export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adicionar os eventos ao accordion
  addEventAcoordion() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar funcao
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addEventAcoordion();
    }
    return this;
  }
}

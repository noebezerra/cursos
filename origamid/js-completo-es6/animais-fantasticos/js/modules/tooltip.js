export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bond do objeto da classe aos callback
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Cria a tooltipbox e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Move a tooltip com base nos seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 190 + 'px';
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  // Remove a tooltip com os eventos de mousemove e mouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver(event) {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Adiciona os eventos de mouseeover a cada tooltip
  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}

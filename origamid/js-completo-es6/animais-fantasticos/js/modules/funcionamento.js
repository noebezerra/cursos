export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = 'aberto';
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    // bug quando for 0hr
    this.horaAgora = this.dataAgora.getUTCHours()
      ? this.dataAgora.getUTCHours() - 3
      : 12 - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horaAgora >= this.horarioSemana[0] &&
      this.horaAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

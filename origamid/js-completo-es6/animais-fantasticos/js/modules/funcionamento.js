export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  const agora = new Date();
  const diaAgora = agora.getDay();
  const horaAgora = agora.getHours();
  if (
    diasSemana.indexOf(diaAgora) !== -1 &&
    horaAgora >= horarioSemana[0] &&
    horaAgora < horarioSemana[1]
  ) {
    funcionamento.classList.add('aberto');
  }
}

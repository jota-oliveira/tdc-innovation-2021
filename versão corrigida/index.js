const $ = document.querySelector.bind(document);

const modalContainer = $('#modalReportarProblema');
const botaoFecharModal = $('#botaoFechar');

const teclasPadraoAcoes = ['Space', 'Enter'];

const abrirModal = () => {
  modalContainer.classList.add('mostrar');
  focarBotaoFecharModal();
};

const fecharModal = () => {
  modalContainer.classList.remove('mostrar');
}

const focarBotaoFecharModal = () => {
  botaoFecharModal.focus();
}

const reportarProblema = () => {
  
}

const verificarBotaoPrecionado = (eventKeyDown) => {
  if (teclasPadraoAcoes.includes(eventKeyDown.code)) {
    eventKeyDown.preventDefault();
    fecharModal();    
  }
}


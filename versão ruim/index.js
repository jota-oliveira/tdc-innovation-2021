const $ = document.querySelector.bind(document);

const modalContainer = $('#modalReportarProblema');

const abrirModal = () => {
  modalContainer.classList.add('mostrar');
};

const fecharModal = () => {
  modalContainer.classList.remove('mostrar');
}


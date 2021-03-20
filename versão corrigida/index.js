import { ModalReportarProblema } from './modalReportarProblema.js';

new ModalReportarProblema({
  modal: '#modalReportarProblema',
  btnFechar: '#btnFechar',
  btnCancelar: '#btnCancelar',
  btnEnviar: '#btnEnviar',
  btnAbrir: '#btnReportarProblema',
  input: '#descrevaSeuProblemaInput',
  reportErro: '#mensagemErroModal',
  btnMensagemBotaoEnviar: "#mensagemBotao",
});

import { FormReportarProblema } from './modules/index.js';
import { Modal } from './ui/index.js';

const referenciasModalReportarProblema = {
  modal: '#modalReportarProblema',
  btnFechar: '#btnFechar',
  btnAbrir: '#btnReportarProblema',
  btnMensagemBotaoEnviar: "#mensagemBotao"
};

const referenciasFormReportarProblema = {
  btnCancelar: '#btnCancelar',
  btnEnviar: '#btnEnviar',
  input: '#descrevaSeuProblemaInput',
  reportErro: '#mensagemErroModal',
  btnMensagemBotaoEnviar: "#mensagemBotao"
}

const modal = new Modal(referenciasModalReportarProblema);

referenciasFormReportarProblema['acaoCancelar'] = modal.fechar.bind(modal);
new FormReportarProblema(referenciasFormReportarProblema);



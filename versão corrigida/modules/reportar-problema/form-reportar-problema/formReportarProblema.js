export class FormReportarProblema {

  formErrors = {
    error: null
  };

  constructor(referencias) {
    this.$ = document.querySelector.bind(document);
    this.btnEnviar = this.$(referencias.btnEnviar);
    this.btnCancelar = this.$(referencias.btnCancelar);
    this.acaoCancelar = referencias.acaoCancelar;
    this.input = this.$(referencias.input);
    this.reportErro = this.$(referencias.reportErro);
    this.btnMensagemBotaoEnviar = this.$(referencias.btnMensagemBotaoEnviar);

    this._prepararElementos();
  }

  reportarProblema (event) {
    event.preventDefault();

    if (this._validarInput()) {
      alert('Dados enviados!');
    }
  }

  _validarInput () {
    try {
      this.formErrors.error = null;
      this._verificarPreenchimentoInput();
      this._atualizarMensagemErro();
    } catch (error) {
      this.formErrors.error = error.message;
      this._atualizarMensagemErro();
      return false;
    }

    return true;
  }

  _verificarPreenchimentoInput () {
    if (!this.input.value) {
      throw new Error('Esse campo precisa ser preenchido');
    }
  }

  _atualizarMensagemErro () {
    this.reportErro.innerHTML = this.formErrors.error;

    if (this.formErrors.error) {
      this.reportErro.setAttribute("aria-live", "polite");
      this.reportErro.setAttribute('tabindex', 0);
      this.reportErro.focus();
      this.btnEnviar.setAttribute("aria-disabled", true);
      this.btnEnviar.classList.add('disabled');
      this.btnMensagemBotaoEnviar.innerHTML = 'Botão desabilitado porque o formulário está inválido';
    } else {
      this.reportErro.removeAttribute('tabindex');
      this.btnEnviar.focus();
      this.btnEnviar.setAttribute("aria-disabled", false);
      this.btnEnviar.classList.remove('disabled');
      this.btnMensagemBotaoEnviar.innerHTML = null;
    }
  }

  _prepararElementos () {
    this.btnEnviar.onclick = this.reportarProblema.bind(this);
    this.input.onblur = this._validarInput.bind(this);

    if (this.btnCancelar && this.acaoCancelar) {
      this.btnCancelar.onclick = this.acaoCancelar;
    }
  }
}

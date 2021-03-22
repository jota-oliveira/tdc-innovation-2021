export class ModalReportarProblema {

  formErrors = {
    error: null
  };

  get teclasPadraoAcoes() {
    return ['Space', 'Enter'];
  }

  constructor(referencias) {
    this.$ = document.querySelector.bind(document);
    this.modal = this.$(referencias.modal);
    this.btnFechar = this.$(referencias.btnFechar);
    this.btnCancelar = this.$(referencias.btnCancelar);
    this.btnEnviar = this.$(referencias.btnEnviar);
    this.btnAbrir = this.$(referencias.btnAbrir);
    this.input = this.$(referencias.input);
    this.reportErro = this.$(referencias.reportErro);
    this.btnMensagemBotaoEnviar = this.$(referencias.btnMensagemBotaoEnviar);

    this._escutarTeclaPadraoFechar();
    this._prepararElementos();
  }

  abrir () {
    this.modal.classList.add('mostrar');
    this.focarBotaoFechar();
  };

  fechar (event) {
    event.preventDefault();
    this.input.value = '';
    this.modal.classList.remove('mostrar');
  }

  focarBotaoFechar () {
    this.btnFechar.focus();
  }

  reportarProblema (event) {
    event.preventDefault();

    if (this._validarInput()) {
      alert('Dados enviados!');
    }
  }

  verificarBotaoPrecionado (eventKeyUp) {
    if (this.teclasPadraoAcoes.includes(eventKeyUp.code)) {
      this.fechar(eventKeyUp);    
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
      this.btnMensagemBotaoEnviar.innerHTML = 'Botão desabilitado porque o formulário está inválido';
    } else {
      this.reportErro.removeAttribute('tabindex');
      this.btnCancelar.focus();
      this.btnEnviar.setAttribute("aria-disabled", false);
      this.btnMensagemBotaoEnviar.innerHTML = null;
    }
  }

  _escutarTeclaPadraoFechar () {
    document.addEventListener('keyup', (keyUpEvent) => {
      if (keyUpEvent.code === 'Escape') {
        this.fechar(keyUpEvent);
      }
    });
  }

  _prepararElementos () {
    this.btnAbrir.onclick = this.abrir.bind(this);
    this.btnFechar.onclick = this.fechar.bind(this);
    this.btnFechar.onkeydown = this.verificarBotaoPrecionado.bind(this);
    this.btnCancelar.onclick = this.fechar.bind(this);
    this.btnEnviar.onclick = this.reportarProblema.bind(this);
    this.btnEnviar.onblur = this.focarBotaoFechar.bind(this);
    this.input.onblur = this._validarInput.bind(this);
  }
}

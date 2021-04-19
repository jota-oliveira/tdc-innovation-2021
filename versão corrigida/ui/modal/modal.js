export class Modal {

  get _elementosFocaveis() {
    return 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  }

  get _atalhosBtnPadraoAcoes() {
    return ['Space', 'Enter'];
  }

  constructor(referencias) {
    this.$ = document.querySelector.bind(document);
    this.modal = this.$(referencias.modal);
    this.btnFechar = this.$(referencias.btnFechar);
    this.btnAbrir = this.$(referencias.btnAbrir);

    this._prepararElementos();
    this._prepararMapaTeclado();
  }

  abrir () {
    this.modal.classList.add('mostrar');
    this.btnFechar.focus();
  };

  fechar () {
    this.modal.classList.remove('mostrar');
  }

  _prepararElementos () {
    this.btnAbrir.onclick = this.abrir.bind(this);
    this.btnFechar.onclick = this.fechar.bind(this);
    this.elementosFocaveisModal = this.modal.querySelectorAll(this._elementosFocaveis);
    this.ultimoElementoModal = this.elementosFocaveisModal[this.elementosFocaveisModal.length - 1];
  }

  _prepararMapaTeclado() {
    document.addEventListener('keydown', (keyDownEvent) => {
      this._atalhoTeclaFechar(keyDownEvent);
      this._navegacaoPorTab(keyDownEvent);
      this._onKeyDownBtnFechar(keyDownEvent);
    });
  }

  _atalhoTeclaFechar (keyDownEvent) {
    if (keyDownEvent.code === 'Escape') {
      keyDownEvent.preventDefault();
      this.fechar();
    }
  }

  _navegacaoPorTab (keyDownEvent) {   
    const teclaTABPressionada = keyDownEvent.key === 'Tab' || keyDownEvent.code === 9;

    if (teclaTABPressionada) {
      const elementoAtivo = document.activeElement;

      this._trabalharNavegacaoComShift(keyDownEvent, elementoAtivo);
      this._trabalharNavegacaoPadrao(keyDownEvent, elementoAtivo);
    }
  }

  _trabalharNavegacaoComShift(keyDownEvent, elementoAtivo) {
    if (keyDownEvent.shiftKey && (elementoAtivo === this.btnFechar)) {
      keyDownEvent.preventDefault();
      this.ultimoElementoModal.focus();
    }
  }

  _trabalharNavegacaoPadrao(keyDownEvent, elementoAtivo) {
    if (elementoAtivo === this.ultimoElementoModal) {
      keyDownEvent.preventDefault();
      this.btnFechar.focus();
    }
  }

  _onKeyDownBtnFechar (eventKeyDown) {
    const btnFecharAtivo = document.activeElement === this.btnFechar;
    if (btnFecharAtivo && this._atalhosBtnPadraoAcoes.includes(eventKeyDown.code)) {
      eventKeyDown.preventDefault();
      this.fechar();
    }
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss']
})
export class OrdemCompraComponent implements OnInit {

  constructor() { }

  endereco = '';
  numero = '';
  complemento = '';
  formaPagamento = '';

  enderecoValido: boolean;
  complementoValido: boolean;
  numeroValido: boolean;
  formaPagamentoValido: boolean;

  // estados primitivos dos campos (pristine)
  public enderecoEstadoPrimitivo = true;
  public numeroEstadoPrimitivo = true;
  public complementoEstadoPrimitivo = true;
  public formaPagamentoEstadoPrimitivo = true;

  ngOnInit() {
  }

  atualizarEndereco(endereco: string) {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  atualizarNumero(numero: string) {
    this.numero = numero;

    this.numeroEstadoPrimitivo = false;

    if(this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  atualizarComplemento(complemento: string) {
    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;

    if(this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  atualizarFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }

}

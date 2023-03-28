import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  
    nome: string;
    documento: string;
    endereco: string;
    tipoCliente: string;
  
    constructor(nome: string, documento: string, endereco: string, tipoCliente: string) {
      this.nome = nome;
      this.documento = documento;
      this.endereco = endereco;
      this.tipoCliente = tipoCliente;
    }
  }





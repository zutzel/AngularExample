import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
  <h2>Hello World</h2>
  <p>First Template</p>
  `
})
export class HomeComponent implements OnInit {
  fontColor = 'red';
  sayHelloId = 1;
  podeClicar = false;
  mensagem = 'Hello woorld';
  condition = true;
  exibirMensagem() {
    alert(this.mensagem);
  this.podeClicar = true; 
  }
  pessoas = [
    {id: 1, nome:'Jamanta'},
    {id: 2, nome:'Tonho'},
    {id: 3, nome:'Paola'},
    {id: 4, nome:'Paulina'},
    {id: 5, nome:'Dulce Maria'}
  ];
  selecionar(pessoa: {id: number, nome: string}):void{
    alert(pessoa.nome);
  }

  message = 'Eu sou apenas leitura!';
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'Você pode me editar!';
    } else {
      this.message = 'Eu sou apenas leitura!';
    }
  }

  constructor(http:HttpService) { }

  ngOnInit(): void {
  }

}

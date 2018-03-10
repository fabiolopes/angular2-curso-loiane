import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  styles:[
    ` 
      .highlight{
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean;
  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  nomeCurso: string = 'Angular';
  novoValor: number = 10;
  
  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}

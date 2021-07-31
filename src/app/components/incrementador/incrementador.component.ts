import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') public progress: number = 5;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorPadre: EventEmitter<number> = new EventEmitter();

  public valorProgress(valor: number): void{

    if(this.progress >= 100 && valor > 0){
      this.valorPadre.emit(100);
      this.progress = 100;
      return;
    }else if(this.progress <= 0 && valor < 0){
      this.valorPadre.emit(0);
      this.progress = 0;
      return;
    }

    this.progress+=valor;
    this.valorPadre.emit(this.progress);
  }

  onChange(nuevoValor: number){

    if(nuevoValor >= 100 ){
      this.progress = 100;
    }else if(nuevoValor <= 0 ){
      this.progress = 0;
    } else{
      this.progress = nuevoValor;
    }
    this.valorPadre.emit( this.progress );
  }
}

import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent  {

  public progresoBar1: number = 20;
  public progresoBar2: number = 50;

  progresoValor1(){
    return`${this.progresoBar1}%`;
  }

  progresoValor2(){
    return`${this.progresoBar2}%`;
  }
}

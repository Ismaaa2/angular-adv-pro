import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels1: string[] = ['a', 'b', 'c'];
  public data1: any[] = [ 100, 550, 20 ];

  public labels2: string[] = ['Compras', 'Ventas', 'Orden'];
  public data2: any[] = [ [350, 450, 100] ];

}

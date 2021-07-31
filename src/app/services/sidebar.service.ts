import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Menu',
      icon: 'mdi mid-gauge',
      submenu: [
        {title: 'Main', url: '/'},
        {title: 'ProgressBar', url: 'progress'},
        {title: 'Gráficas', url: 'grafica1'},
      ]
    }
  ];

  constructor() { }
}

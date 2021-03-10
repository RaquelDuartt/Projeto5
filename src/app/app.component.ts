import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Artigos', url: '/articles', icon: 'paper-plane'},
    { title: 'Notícias', url: '/news', icon: 'newspaper'},
    { title: 'Contato', url: '/contacts', icon: 'chatbubbles'},
    { title: 'Sobre', url: '/about', icon: 'informatiom-circle'},
  ];
   constructor() {}
};

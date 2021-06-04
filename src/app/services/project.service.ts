import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  projects: Array<object>= [
    {
      'title': 'Photogram',
      'img' : 'assets/icons/photogram.jpg',
      'url' : 'https://hershkogram.herokuapp.com/',
      'desc': "E2E project inspired by Instagram. Was developed with Vue.js"
    },
    {
      'title': 'Chesstore',
      'img' : 'assets/icons/chesstore.jpg',
      'url' : 'https://erez2021.github.io/chess-store/#/',
      'desc': 'Online store, contains many features. Was developed with Angular 11'
    },
    {
      'title': 'Mr.Bitcoin',
      'img' : 'assets/icons/bitcoin.jpg',
      'url' : 'https://erez2021.github.io/new-mister-bitcoin/#/',
      'desc': 'App for trading Bitcoin. Was developed with Angular 11 '
    }
  ]

  getProjects() {
    return this.projects
  }
}

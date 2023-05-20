import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'https://rickandmortyapi.com/api/';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(URL+'character/'+this.getRandom().join());
  }

  getById(id: any){
    return this.http.get(URL+'character/'+id);
  }

  getRandom() {
    let randomItems = [];
    for (let i = 0; i < 8; i++) {
      randomItems.push(Math.floor(Math.random() * 100 + 1))
    }
    return randomItems;
  }
}

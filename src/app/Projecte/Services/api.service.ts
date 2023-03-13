import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMonsters(): any {
    return this.http.get('https://www.dnd5eapi.co/api/monsters');
  }
  
  getImage(nom: String): any {
    return this.http.get('https://www.dnd5eapi.co/api/monsters/'+nom);
  }

}

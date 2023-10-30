import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrueTechService {
  private data = [
    { id: 1, 
      nombre: 'Wesley',
      apellido: 'Beltre' },
    { id: 2, 
      nombre: 'Alejandro',
      apellido: 'Herrero'},
    
  ];

  getData() {
    return this.data;
  }
}

// usuario.service.ts
import { Injectable } from '@angular/core';
import { Usuario, Direccion } from './usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarios: Usuario[] = [
    new Usuario('Pedro', 'Porcuna', 'pedroporcuna@gmail.com', new Direccion('Calle Catalunya', '08037', 'Barcelona '), new Date('1990-01-01')),
    new Usuario('Fermin', 'López', 'ferminlop@gmail.com', new Direccion('Avenida Passeo de Gràcia', '08031', 'Barcelona'), new Date('1985-03-15')),
  ];
  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  getUsuarioPorId(id: number): Usuario | undefined {
    return this.usuarios[id];
  }

  getUsuariosPorNombre(nombre: string): Usuario[] {
    return this.usuarios.filter((usuario) => usuario.nombre === nombre);
  }
}

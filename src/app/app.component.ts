import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';
/*import { TrueTechService } from './true-tech.service';*/


@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
 /* providers: [TrueTechService]*/
})
export class AppComponent /*implements OnInit*/{
/*datos: any[] = []; // Inicializa la variable datos como un arreglo vacío

  constructor(private trueTechService: TrueTechService) { }

  ngOnInit() {
    this.datos = this.trueTechService.getData();
  }*/

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getUsuarios();

    // Ejemplo de cómo obtener información de un usuario por ID
    const usuarioEjemplo = this.usuarioService.getUsuarioPorId(0);
    console.log('Información de usuario por ID:', usuarioEjemplo);

    // Ejemplo de cómo obtener usuarios con el mismo nombre
    const usuariosConMismoNombre = this.usuarioService.getUsuariosPorNombre('Pedro');
    console.log('Usuarios con el mismo nombre:', usuariosConMismoNombre);
  }
  imagenes = [
    { imagen: 'software.jpg' }, // Agregar la imagen de software al arreglo
  ];

}

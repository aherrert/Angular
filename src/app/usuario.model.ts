export class Usuario {
  constructor(
    public nombre: string,
    public apellido: string,
    public email: string,
    public direccion: Direccion,
    public fechaNacimiento: Date
  ) {}
}

export class Direccion {
  constructor(
    public calle: string,
    public codigoPostal: string,
    public ciudad: string
  ) {}
}

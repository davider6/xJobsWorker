import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: Credenciales = {};
  categories: Categories[];

  constructor() { }

  cargarUsuario(
    nombre: string, 
    email: string, 
    imagen: string,
    uid: string,
    provider: string
  ){
    this.usuario.nombre = nombre;
    this.usuario.email = email;
    this.usuario.imagen = imagen;
    this.usuario.uid = uid;
    this.usuario.provider = provider;
  }

}

export interface Credenciales {
    nombre?: string; 
    email?: string; 
    imagen?: string;
    uid?: string;
    provider?: string;
}
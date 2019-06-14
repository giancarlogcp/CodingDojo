import { Injectable } from "@angular/core";
import { Usuario } from "../modelos/usuario";
import { allResolved } from "q";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  constructor() {}

  login(usuario: Usuario) {
    if (usuario.correo == "ser@a.com" && usuario.contrasenia == "123") {
      alert("Usuario logueado");
    }
  }
}

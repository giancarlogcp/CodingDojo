import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from "../servicios/usuario.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  grupo: FormGroup;

  constructor(private servicioLogin: UsuarioService) {}

  ngOnInit() {
    this.grupo = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasenia: new FormControl(null, [Validators.required])
    });
  }
  logearse() {
    var datos = this.grupo.getRawValue();
    console.log(datos);
    this.servicioLogin.login(datos);
  }
  irRegistro() {}
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";
import { OlvidoComponent } from "./olvido/olvido.component";
import { Routes, RouterModule } from "@angular/router";
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { ReactiveFormsModule } from "@angular/forms";

const rutas: Routes = [
  { path: "", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "olvido", component: OlvidoComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    OlvidoComponent,
    CabeceraComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(rutas), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

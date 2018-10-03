import { Component, OnInit } from '@angular/core';
import { UsuarioModelo } from '../modelos/user.modelo';
import { UsuarioServico } from '../servicos/usuario.servico';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: UsuarioModelo[];
  usuario: UsuarioModelo;

  constructor(private router: Router, public usuarioServico: UsuarioServico) { 
  }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarios = this.usuarioServico.getUsuarios();
  }

  getUsuariosPorLogin(email: string, senha: string): UsuarioModelo {
    let result = this.usuarios.filter(x => x.email === email && x.senha === senha)
    return this.usuario = result[0];
  }

  public onSubmit(email: string, senha: string): void {
    this.getUsuariosPorLogin(email, senha);
    if (this.usuario) {
      console.log(this.usuario)
      environment.usuarioId = this.usuario.id;
      this.navegarParaHome();
      return console.log("Usuário e senha encontrados");

    }
    console.log("Usuário não encontrado");

  }

  navegarParaHome() {
    this.router.navigate(["index"]);
  }

}

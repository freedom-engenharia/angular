import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { UsuarioServico } from 'src/app/servicos/usuario.servico';
import { UsuarioModelo } from 'src/app/modelos/user.modelo';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  usuarioId: any;
  telaFilha: string;
  usuarioLogado: UsuarioModelo;

  constructor(private router: Router, public usuarioServico: UsuarioServico) {
    this.usuarioId = environment.usuarioId;
    this.telaFilha = "tela-inicial";
   }

   ngOnInit() {
    this.usuarioLogado = this.usuarioServico.getUsuarioPorId(this.usuarioId);
  }

   logar() {
    this.navegarParaLogin();
    
  }

  deslogar() {
    environment.usuarioId = '';
    this.navegarParaLogin();
  }

  mudarTela(botao: any) {
    if (botao == "tela-inicial") {
      this.telaFilha = 'tela-inicial'
    }
  }

  navegarParaLogin() {
    this.router.navigate(["login"]);
  }



}

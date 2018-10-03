import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  usuarioId: any;
  telaFilha: string;

  constructor(private router: Router) {
    this.usuarioId = environment.usuarioId;
    this.telaFilha = "tela-inicial";
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

  ngOnInit() {
  }

}

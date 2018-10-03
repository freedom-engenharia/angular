import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { routing } from '../app.routing';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    CompartilhadoModule
  ],
  declarations: [IndexComponent, TelaInicialComponent, ],
  exports: [IndexComponent],
  entryComponents: [TelaInicialComponent, ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { routing } from '../app.routing';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { ModalComponent } from './tela-inicial/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    CompartilhadoModule
  ],
  declarations: [IndexComponent, TelaInicialComponent, ModalComponent, ],
  exports: [IndexComponent],
  entryComponents: [TelaInicialComponent, ModalComponent]
})
export class HomeModule { }

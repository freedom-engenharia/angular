import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { routing } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule,
    routing
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule { }

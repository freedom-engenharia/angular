import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  IMqttMessage,
  MqttModule,
  IMqttServiceOptions,
} from 'ngx-mqtt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { UsuarioServico } from './servicos/usuario.servico';
import { routing } from './app.routing';
import { HomeModule } from './home/home.module';
import { DeviceService } from './servicos/device.servico';
import { EntityFactoryService } from './servicos/entity-factory.service';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'broker.hivemq.com',
  protocol: 'ws',
  port: 8000,
  path: '/mqtt'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    HomeModule,
    LoginModule,
    LoginModule,
    RouterModule,
    BrowserModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    BrowserAnimationsModule,
    CompartilhadoModule
  ],
  providers: [UsuarioServico, EntityFactoryService, DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

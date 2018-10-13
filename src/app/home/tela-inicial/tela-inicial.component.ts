import { Component, OnInit, OnDestroy } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { DeviceModelo } from '../../modelos/device.modelo';
import { EntityFactoryService } from '../../servicos/entity-factory.service';
import { DeviceService } from '../../servicos/device.servico';
import { FreedomBoard } from '../../modelos/freedomDoard.modelo';
import { environment } from '../../../environments/environment';
import * as _ from "lodash";
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit, OnDestroy {

  listaDevices: any[]
  freedomBoardModel: FreedomBoard;
  objetoUpdate: any;
  deviceSelecionado: DeviceModelo;
  devices: DeviceModelo[];
  usuarioId: string;
  deviceIdMqtt: string;
  statusSolicitado: boolean;

  private subscription: Subscription;
  public objetoRecebido: DeviceModelo;

  constructor(
    public dialog: MatDialog,
    private _mqttService: MqttService,
    private deviceServico: DeviceService,
  ) {
    this.statusSolicitado = false;

    this.listaDevices = [];

    this.escutaTopico("FREEDOM/RESPOSTA/GETALL/ANGULAR");
  }

  ngOnInit() {
    this.usuarioId = environment.usuarioId;
  }



  ligaDesligaDevice(device: FreedomBoard, status: any) {
    let i: number;
    for (i = 0; i < this.listaDevices.length; i++) {
      if (this.listaDevices[i].id == device.id) {
        if (this.listaDevices[i].tipo == 'FB01') {
          this.listaDevices[i].tipo = 'FB01UPDATE';
        }
        if (this.listaDevices[i].tipo == 'S1R') {
          this.listaDevices[i].tipo = 'S1RUPDATE';
        }

      }
    }

    this.publicaEmTopico(device.topicoMQTTEscutaUpdate, this.objetoUpdate);
    console.log(device.topicoMQTTEscutaUpdate, this.objetoUpdate);
  }

  getAllStatus(topicoRespostaDoDevice: string, topicoEscutaDoDevice: string) {
    this.publicaEmTopico(topicoEscutaDoDevice, 'GETALL')
  }

  escutaTopico(topico: string): any {

    this.subscription = this._mqttService.observe(topico).subscribe((menssagem: IMqttMessage) => {

      let obj = JSON.parse(menssagem.payload.toString());

      if (!this.listaDevices.length) {
        this.listaDevices = _.concat(this.listaDevices, obj);
      }
      console.log("Json recebido: ->>>  ", obj);
      this.atualizaDeviceNalista(obj);
      console.log(this.listaDevices);
    });
  }

  publicaEmTopico(topico: string, menssagem: any) {
    this._mqttService.unsafePublish(topico, JSON.stringify(menssagem), { qos: 1, retain: true });
  }

  atualizaDeviceNalista(objeto: any) {

    let i: number;
    if (objeto.tipo == 'FB01') {
      for (i = 0; i < this.listaDevices.length; i++) {
        if (this.listaDevices[i].id == objeto.id) {
          this.listaDevices[i].tipo = objeto.tipo;
          this.listaDevices[i].ledPlaca = objeto.ledPlaca;
          this.listaDevices[i].nome = objeto.nome;
          this.listaDevices[i].sensor01 = objeto.sensor01;
          this.listaDevices[i].statusRele01 = objeto.statusRele01;
          this.listaDevices[i].statusRele02 = objeto.statusRele02;
          this.listaDevices[i].statusRele03 = objeto.statusRele03;
          this.listaDevices[i].statusRele04 = objeto.statusRele04;

        }
        if (this.listaDevices[i].id !== objeto.id) {
          let existeDeviceNalista = this.listaDevices.filter(x => x.id == objeto.id)
          if (!existeDeviceNalista.length) {
            this.listaDevices = _.concat(this.listaDevices, objeto);
          }
        }
      }
    }
    if (objeto.tipo == 'S1R') {
      for (i = 0; i < this.listaDevices.length; i++) {
        if (this.listaDevices[i].id == objeto.id) {
          this.listaDevices[i].tipo = objeto.tipo;
          this.listaDevices[i].statusLedPlaca = objeto.statusLedPlaca;
          this.listaDevices[i].nome = objeto.nome;
          this.listaDevices[i].statusRele = objeto.statusRele;

        }
        if (this.listaDevices[i].id !== objeto.id) {
          let existeDeviceNalista = this.listaDevices.filter(x => x.id == objeto.id)
          if (!existeDeviceNalista.length) {
            this.listaDevices = _.concat(this.listaDevices, objeto);
          }
        }
      }
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: 'modal'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
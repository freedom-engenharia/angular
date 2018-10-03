import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceModelo } from '../modelos/device.modelo';

@Injectable()
export class DeviceService {

    devices: DeviceModelo[];

    constructor() {
        this.devices = [{
            nome: "WeMos 01", usuarioId: "01", id: "testes1",
            subLocal: "Recepção", topicoMQTTResposta: "RESPOSTAWEMRE00001",
            topicoMQTTEscutaGetAll: "PUBLICAWEMRE00001",
            topicoMQTTEscutaUpdate: '', statusDevice: '', tipo: 0
        },
        {
            nome: "FreedomBoard 01", usuarioId: "01", id: "testes1",
            subLocal: "Salão principal", topicoMQTTResposta: "FREEDOMBOARD/RESPOSTA/GETALL/FREEDOMBOARD0001",
            topicoMQTTEscutaGetAll: "FREEDOMBOARD/ESCUTA/GETALL/FREEDOMBOARD0001",
            topicoMQTTEscutaUpdate: "FREEDOMBOARD/ESCUTA/UPDATE/FREEDOMBOARD0001", statusDevice: '', tipo: 1
        }];
    }

    public getDevices(): DeviceModelo[] {
        return this.devices;
    }

    public getDevicesByUserId(id: string): DeviceModelo[] {
        return this.getDevices().filter(x => x.usuarioId = id);
    }

    public getDevicesById(id: string): DeviceModelo {
        return this.devices.find( x => x.id == id);
    }

}

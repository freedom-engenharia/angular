import { DeviceModelo } from "./device.modelo";

export class FreedomBoard extends DeviceModelo {
    ledPlaca: number;
    statusRele01: number;
    statusRele02: number;
    statusRele03: number;
    statusRele04: number;
    sensor01: [string, string];

    constructor(entity?: FreedomBoard) {
        super();
        this.tipo ? entity.tipo : '';
        this.id = entity ? entity.id : '';
        this.ledPlaca ? entity.ledPlaca : 0;
        this.nome ? entity.nome : '';
        this.statusRele01 ? entity.statusRele01 : 0;
        this.statusRele02 ? entity.statusRele02 : 0;
        this.statusRele03 ? entity.statusRele03 : 0;
        this.statusRele04 ? entity.statusRele04 : 0;
        this.sensor01 ? entity.sensor01 : [];
        this.topicoMQTTEscutaUpdate ? entity.topicoMQTTEscutaUpdate : '';
    }
}
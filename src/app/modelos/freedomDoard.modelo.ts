import { DeviceModelo } from "./device.modelo";

export class FreedomBoard {
    id: string
    tipo: number;
    ledPlaca: string
    statusDevice: string;
    dataUltimaModificacao: string;
    statusRele01: number;
    statusRele02: number;
    statusRele03: number;
    statusRele04: number;
    sensor01: [string, string];
    topicoUpdateDevice: string;

    constructor(entity?: FreedomBoard) {

        this.tipo ? entity.tipo : 0;
        this.id = entity ? entity.id : '';
        this.ledPlaca ? entity.ledPlaca : '';
        this.statusDevice ? entity.statusDevice : '';
        this.statusRele01 ? entity.statusRele01 : 0;
        this.statusRele02 ? entity.statusRele02 : 0;
        this.statusRele03 ? entity.statusRele03 : 0;
        this.statusRele04 ? entity.statusRele04 : 0;
        this.sensor01 ? entity.sensor01 : [];
        this.topicoUpdateDevice ? entity.topicoUpdateDevice : '';
    }
}
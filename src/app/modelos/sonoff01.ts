import { DeviceModelo } from "./device.modelo";

export class Sonoff01 extends DeviceModelo {
    statusLedPlaca: number;
    statusRele: number;

    constructor(entity?: Sonoff01) {
        super();
        this.tipo ? entity.tipo: '';
        this.nome ? entity.nome: '';
        this.id ? entity.id: '';
        this.subLocalId ? entity.subLocalId: '';
        this.topicoMQTTResposta ? entity.topicoMQTTResposta: '';
        this.topicoMQTTEscutaGetAll ? entity.topicoMQTTEscutaGetAll: '';
        this.topicoMQTTEscutaUpdate ? entity.topicoMQTTEscutaUpdate: '';
        this.empresaId ? entity.empresaId: '';
    }
}
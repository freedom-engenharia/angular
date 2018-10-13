import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceModelo } from '../modelos/device.modelo';

@Injectable()
export class DeviceService {

    devices: DeviceModelo[];

    constructor() {

    }
}

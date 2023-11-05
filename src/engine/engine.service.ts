import { Injectable } from '@nestjs/common';
import { BatteryService } from 'src/battery/battery.service';

@Injectable()
export class EngineService {
    constructor(private readonly batteryService: BatteryService){}
    strtingEngine(){
        // check if battery is working

        return (`${this.batteryService.powerSupply()}          engine is working`)

    }
}

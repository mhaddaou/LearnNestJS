import { Injectable } from '@nestjs/common';
import { BatteryService } from 'src/battery/battery.service';
import { EngineService } from 'src/engine/engine.service';

@Injectable()
export class ConditionerService {
    constructor(private readonly engineService: EngineService){}

    on(){
        return (`
        ${this.engineService.strtingEngine()}         the conditioner is working
        `)
    }

}

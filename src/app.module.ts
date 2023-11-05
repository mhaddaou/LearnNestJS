import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { BatteryModule } from './battery/battery.module';
import { EngineModule } from './engine/engine.module';
import { ConditionerModule } from './conditioner/conditioner.module';
import { CarModule } from './car/car.module';

@Module({
    imports:[UsersModule, BatteryModule, EngineModule, ConditionerModule, CarModule]
})
export class AppModule{}
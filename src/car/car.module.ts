import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { ConditionerModule } from 'src/conditioner/conditioner.module';
import { EngineModule } from 'src/engine/engine.module';

@Module({
  imports:[ConditionerModule, EngineModule],
  controllers: [CarController]
})
export class CarModule {}

import { SharedService } from 'src/shared/shared.service';
import { SharedModule } from './../shared/shared.module';
import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

@Module({
  imports: [SharedModule],
  controllers: [CoffeeController],
  providers: [CoffeeService, SharedService],
})
export class CoffeeModule {}

import { SharedService } from 'src/shared/shared.service';
import { CoffeeService } from './coffee/coffee.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
  controllers: [AppController],
  providers: [AppService, SharedService],
})
export class AppModule {}

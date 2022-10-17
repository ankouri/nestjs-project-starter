import { CoffeeService } from './coffee/coffee.service';
import { SharedService } from './shared/shared.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('abdellah')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sharedServ: SharedService,
  ) {}

  @Get()
  getHello(): string {
    return this.sharedServ.hello();
  }
}

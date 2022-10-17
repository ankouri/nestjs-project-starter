import { Controller, Get } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private sharedSrv: SharedService) {}

  @Get()
  sayHello() {
    return this.sharedSrv.hello();
  }
}

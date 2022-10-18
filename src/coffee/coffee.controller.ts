import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { Coffee } from 'entities/coffee.entity';
import { SharedService } from 'src/shared/shared.service';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private sharedSrv: SharedService, private coffeeServ: CoffeeService) {}
  @Post()
  addNewCoffe(@Body() body :Coffee): void {
    return this.coffeeServ.addNewOne(body);
  }
 // GET LIST OF COFFEES
  @Get()
  getAlllist() {
    return this.coffeeServ.getAll();
  }
  //GET COFEE BY ID
  @Get(':id')
  getById(@Param('id') id :number) {
    return this.coffeeServ.getCoffeeById(id);
  }
  //DELETE
  @Delete(':id')
  deleteCoffee(@Param('id') id :any): any {
    return this.coffeeServ.deleteCoffee(id);
  }
  //UPDATE
  @Patch(':id')
  updateCoffe(@Param('id') id :any, @Body() body :Coffee){
   return this.coffeeServ.updateCoffee(id, body);
  }
}

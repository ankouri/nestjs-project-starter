import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { Coffee } from 'entities/coffee.entity';
import { CreateCoffeeDto } from 'src/dto/create-coffee.dto';
import { UpdateCoffeeDto } from 'src/dto/update-coffee.dto';
import { SharedService } from 'src/shared/shared.service';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private srv: CoffeeService) { }
  @Get()
  get() {
      return this.srv.findAll();
  }

  @Post()
  create(@Body() body: CreateCoffeeDto) {
      return this.srv.create(body)
  }

  @Patch(':id')
  update(@Param('id') id:number, @Body() body: UpdateCoffeeDto) {
      return this.srv.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id:number) {
      return this.srv.delete(id)
  }
}

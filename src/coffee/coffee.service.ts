import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from 'entities/coffee.entity';

@Injectable()
export class CoffeeService {

   data: Coffee[] = [
    {
        id:1, name:'Coffee 1',brand:'brand 1', flavors:'Chocolate'
    },
    {
        id:2, name:'Coffee 2',brand:'brand 2', flavors:'Chocolate'
    },
    {
        id:3, name:'Coffee 3',brand:'brand 3', flavors:'vanilla'
    },
   ];

   //ADD NEW COFFEE
   addNewOne(coffee: Coffee):void {
    this.data.push(coffee);
   }
   //GET LIST ELEMENT
   getAll():Coffee[] {
    return this.data;
   }
   //DELETE COFFEE;
   deleteCoffee(id: number) {
    return this.data.filter(obj => obj.id != id);
   }


   //UPDATE COFFEE;
   updateCoffee(id: number, newCoffee: Coffee) {
    //check if the element exist
    let ele = this.data.find(obj => obj.id == id);
    console.log(ele);
    if(!ele) {
        throw new NotFoundException(`Coffe ID ${id} Not Found!! `)
    }
    
    for (const coffee of this.data) {
        if(coffee.id == id){
            coffee.name = newCoffee.name;
            coffee.brand = (!newCoffee.brand || newCoffee.brand == "") ? coffee.brand : newCoffee.brand;
            coffee.flavors = newCoffee.flavors;
        }
    }
    return this.data;
   }

   //GET ELEMENT BY ID
   getCoffeeById(id: number):Coffee {
    let res = this.data.filter(obj => obj.id == id)
    if(res.length > 0){
        return res[0];
    }else{
        return null;
    }
   }





}

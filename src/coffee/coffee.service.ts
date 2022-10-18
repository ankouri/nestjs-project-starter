import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from 'entities/coffee.entity';
import { CreateCoffeeDto } from 'src/dto/create-coffee.dto';
import { UpdateCoffeeDto } from 'src/dto/update-coffee.dto';

@Injectable()
export class CoffeeService {
    private coffeeData: CreateCoffeeDto[] = [
        {
            id:1,
            name: "Shipwreck Roast",
            brand: "Buddy Brew",
            flavors: ["vanilla", "chocolate"]
        }
    ];

    findAll() {
        return this.coffeeData
    }

    findOne(id: number) {
        return this.coffeeData.find(c => c.id == id)
    }

    create(createCoffee: CreateCoffeeDto) {
        this.coffeeData.push(createCoffee);
        return this.coffeeData
    }

    update(id: number, createCoffee: Partial<UpdateCoffeeDto>) {
        let coffeeTemp = this.coffeeData.find(v => v.id == id)
        if (coffeeTemp) {
            for (const coffee of this.coffeeData) {
                if (coffee.id == id) {
                    coffee.flavors = createCoffee.flavors
                    coffee.name = createCoffee.name
                    coffee.brand = createCoffee.brand
                }
            }
        } else {
            return new NotFoundException()
        }
        return this.coffeeData
    }

    delete(id: number) {
        this.coffeeData = this.coffeeData.filter(v => v.id != id)
        console.log(this.coffeeData);
        
        return this.coffeeData
    }
}

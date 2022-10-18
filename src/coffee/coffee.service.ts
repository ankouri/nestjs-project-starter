import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from 'entities/coffee.entity';

@Injectable()
export class CoffeeService {
    private coffeeData: Coffee[] = [
        {
            id: 1,
            name: "Shipwreck Roast",
            brand: "Buddy Brew",
            flavors: ["vanilla", "chocolate"]
        }
    ];

    findAll() {
        return this.coffeeData
    }

    findOne(id: string) {
        return this.coffeeData.find(c => c.id == Number(id))
    }

    create(createCoffee: Coffee) {
        this.coffeeData.push(createCoffee);
        return this.coffeeData
    }

    update(id: number, createCoffee: Partial<Coffee>) {
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
        this.coffeeData = this.coffeeData.filter(v => v.id !== Number(id))
        return this.coffeeData
    }
}

import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCoffeeDto {
    @IsNumber()
    id?:number;
    @IsString()
    name: string;
    @IsString()
    brand: string;
    @IsString({each:true})
    flavors: string[]
}

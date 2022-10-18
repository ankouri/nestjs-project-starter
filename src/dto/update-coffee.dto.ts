import { IsNumber, IsString } from "class-validator";

export class UpdateCoffeeDto {
    @IsNumber()
    id?:number;
    @IsString()
    name: string;
    @IsString()
    brand: string;
    @IsString({each:true})
    flavors: string[]
}

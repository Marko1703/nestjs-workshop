import { IsString, Length, IsNumber, IsOptional } from "class-validator";

export class CreateArtistDto {
    @IsString()
    @Length(3, 30)
    firstName: string;

    @IsString()
    @Length(3, 30)
    lastName: string;

    @IsString()
    @IsOptional()
    stageName: string;

    @IsNumber()
    age: number;
}
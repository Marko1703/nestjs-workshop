import { IsString, Length, IsNumber, IsOptional } from "class-validator";

export class CreateAlbumDto {
    @IsString()
    @Length(3, 30)
    title: string;

    @IsString()
    genre: string;

    @IsString()
    year: string;

    @IsNumber()
    numberOfSales: number;
}
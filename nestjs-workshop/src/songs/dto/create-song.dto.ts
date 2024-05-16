import { IsString, Length, IsNumber } from "class-validator";

export class CreateSongDto {
    @IsString()
    @Length(3, 30)
    title: string;

    @IsNumber()
    duration: number;

    @IsString()
    year: string;

    @IsNumber({}, { each: true })
    artistId: number;

    @IsString()
    genre: string;
}
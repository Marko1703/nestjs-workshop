import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';
import { Repository } from 'typeorm';
export declare class ArtistsService {
    private artistRepo;
    constructor(artistRepo: Repository<Artist>);
    create(createArtistDto: CreateArtistDto): Promise<CreateArtistDto & Artist>;
    findAll(): Promise<Artist[]>;
    findOne(id: number): Promise<Artist>;
    update(id: number, updateArtistDto: UpdateArtistDto): Promise<Artist>;
    remove(id: number): Promise<void>;
}

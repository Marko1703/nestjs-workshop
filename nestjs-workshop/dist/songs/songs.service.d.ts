import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';
export declare class SongsService {
    private songRepo;
    constructor(songRepo: Repository<Song>);
    create(createSongDto: CreateSongDto): Promise<CreateSongDto & Song>;
    findAll(): Promise<Song[]>;
    findOne(id: number): Promise<Song>;
    update(id: number, updateSongDto: UpdateSongDto): Promise<Song>;
    remove(id: number): Promise<void>;
}

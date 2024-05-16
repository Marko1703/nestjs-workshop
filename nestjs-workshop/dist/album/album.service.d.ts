import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';
import { Repository } from 'typeorm';
export declare class AlbumService {
    private albumRepo;
    constructor(albumRepo: Repository<Album>);
    create(createAlbumDto: CreateAlbumDto): Promise<CreateAlbumDto & Album>;
    findAll(): Promise<Album[]>;
    findOne(id: number): Promise<Album>;
    update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<Album>;
    remove(id: number): Promise<void>;
}

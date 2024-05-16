import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
export declare class AlbumController {
    private readonly albumService;
    constructor(albumService: AlbumService);
    create(createAlbumDto: CreateAlbumDto): Promise<CreateAlbumDto & import("./entities/album.entity").Album>;
    findAll(): Promise<import("./entities/album.entity").Album[]>;
    findOne(id: string): Promise<import("./entities/album.entity").Album>;
    update(id: string, updateAlbumDto: UpdateAlbumDto): Promise<import("./entities/album.entity").Album>;
    remove(id: string): Promise<void>;
}

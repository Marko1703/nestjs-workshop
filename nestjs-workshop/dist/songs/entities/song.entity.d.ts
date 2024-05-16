import { Artist } from 'src/artists/entities/artist.entity';
import { Album } from 'src/album/entities/album.entity';
export declare class Song {
    id: number;
    title: string;
    duration: number;
    year: string;
    genre: string;
    artist: Artist;
    album: Album[];
}

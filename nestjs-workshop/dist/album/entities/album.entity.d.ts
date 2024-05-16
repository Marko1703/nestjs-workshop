import { Artist } from 'src/artists/entities/artist.entity';
import { Song } from 'src/songs/entities/song.entity';
export declare class Album {
    id: number;
    title: string;
    genre: string;
    year: string;
    numberOfSales: number;
    artist: Artist;
    songs: Song[];
}

import { Album } from 'src/album/entities/album.entity';
import { Song } from 'src/songs/entities/song.entity';
export declare class Artist {
    id: number;
    firstName: string;
    lastName: string;
    stageName: string;
    age: number;
    songs: Song[];
    album: Album[];
}

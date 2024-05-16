import { Artist } from 'src/artists/entities/artist.entity';
import { Song } from 'src/songs/entities/song.entity';
import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  year: string;

  @Column()
  numberOfSales: number;

  @ManyToOne(() => Artist, (artist) => artist.album)
  @JoinColumn()
  artist: Artist;

  @ManyToMany(() => Song, (songs) => songs.album)
  @JoinTable()
  songs: Song[];
}

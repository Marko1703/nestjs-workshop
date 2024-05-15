import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Artist } from 'src/artists/entities/artist.entity';
import { Album } from 'src/album/entities/album.entity';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column()
  year: string;

  @Column()
  genre: string;

  @ManyToOne(() => Artist, (artist) => artist.songs)
  @JoinColumn()
  artist: Artist;

  @ManyToMany(() => Album, (albums) => albums.songs)
  album: Album[]
}

import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song) private songRepo: Repository<Song>,
  ) {}

  async create(createSongDto: CreateSongDto) {
    return this.songRepo.save(createSongDto);
  }

  async findAll() {
    return this.songRepo.find({relations: ['album', 'artist']});
  }

  async findOne(id: number) {
    return this.songRepo.findOne({where: {id}, relations: ['album', 'artist']}); 
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
    await this.songRepo.update(id, updateSongDto);
    return this.songRepo.findOne({where: {id}, relations: ['album', 'artist']});
  }

  async remove(id: number) {
    const song = await this.songRepo.findOne({where: {id}});

    await this.songRepo.delete(id); 
  }
}

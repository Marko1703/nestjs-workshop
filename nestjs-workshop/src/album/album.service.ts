import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album) private albumRepo: Repository<Album>,
  ) {}

  async create(createAlbumDto: CreateAlbumDto) {
    return this.albumRepo.save(createAlbumDto);   
  }

  async findAll() {
    return this.albumRepo.find({relations: ['songs', 'artist'],});
  }

  async findOne(id: number) {
    return this.albumRepo.findOne({where: {id}, relations: ['songs', 'artist']});
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto) {
    await this.albumRepo.update(id, updateAlbumDto);
    return this.albumRepo.findOne({where: {id}, relations: ['songs', 'artist']});
  }

  async remove(id: number) {
    const album = await this.albumRepo.findOne({where: {id}});

    await this.albumRepo.delete(id);
  }
}

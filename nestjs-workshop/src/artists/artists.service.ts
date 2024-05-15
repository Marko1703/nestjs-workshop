import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './entities/artist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist) private artistRepo: Repository<Artist>,
  ) {}

  async create(createArtistDto: CreateArtistDto) {
    return this.artistRepo.save(createArtistDto); 
  }

  async findAll() {
    return this.artistRepo.find({relations: ['songs', 'album'],}); 
  }

  async findOne(id: number) {
    return this.artistRepo.findOne({where: {id}, relations: ['songs', 'album'],}); 
  }

  async update(id: number, updateArtistDto: UpdateArtistDto) {
    await this.artistRepo.update(id, updateArtistDto);

    return this.artistRepo.findOne({where: {id}, relations: ['songs', 'album']});
  }

  async remove(id: number) {
    const artist = await this.artistRepo.findOne({where: {id}});

    await this.artistRepo.delete(id);
  }
}

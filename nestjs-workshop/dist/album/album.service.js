"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const album_entity_1 = require("./entities/album.entity");
const typeorm_2 = require("typeorm");
let AlbumService = class AlbumService {
    constructor(albumRepo) {
        this.albumRepo = albumRepo;
    }
    async create(createAlbumDto) {
        return this.albumRepo.save(createAlbumDto);
    }
    async findAll() {
        return this.albumRepo.find({ relations: ['songs', 'artist'], });
    }
    async findOne(id) {
        return this.albumRepo.findOne({ where: { id }, relations: ['songs', 'artist'] });
    }
    async update(id, updateAlbumDto) {
        await this.albumRepo.update(id, updateAlbumDto);
        return this.albumRepo.findOne({ where: { id }, relations: ['songs', 'artist'] });
    }
    async remove(id) {
        const album = await this.albumRepo.findOne({ where: { id } });
        await this.albumRepo.delete(id);
    }
};
exports.AlbumService = AlbumService;
exports.AlbumService = AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(album_entity_1.Album)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlbumService);
//# sourceMappingURL=album.service.js.map
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
exports.ArtistsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const artist_entity_1 = require("./entities/artist.entity");
const typeorm_2 = require("typeorm");
let ArtistsService = class ArtistsService {
    constructor(artistRepo) {
        this.artistRepo = artistRepo;
    }
    async create(createArtistDto) {
        return this.artistRepo.save(createArtistDto);
    }
    async findAll() {
        return this.artistRepo.find({ relations: ['songs', 'album'], });
    }
    async findOne(id) {
        return this.artistRepo.findOne({ where: { id }, relations: ['songs', 'album'], });
    }
    async update(id, updateArtistDto) {
        await this.artistRepo.update(id, updateArtistDto);
        return this.artistRepo.findOne({ where: { id }, relations: ['songs', 'album'] });
    }
    async remove(id) {
        const artist = await this.artistRepo.findOne({ where: { id } });
        await this.artistRepo.delete(id);
    }
};
exports.ArtistsService = ArtistsService;
exports.ArtistsService = ArtistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(artist_entity_1.Artist)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArtistsService);
//# sourceMappingURL=artists.service.js.map
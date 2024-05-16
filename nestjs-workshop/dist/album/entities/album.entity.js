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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const artist_entity_1 = require("../../artists/entities/artist.entity");
const song_entity_1 = require("../../songs/entities/song.entity");
const typeorm_1 = require("typeorm");
let Album = class Album {
};
exports.Album = Album;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Album.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Album.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Album.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Album.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Album.prototype, "numberOfSales", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artist_entity_1.Artist, (artist) => artist.album),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", artist_entity_1.Artist)
], Album.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => song_entity_1.Song, (songs) => songs.album),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Album.prototype, "songs", void 0);
exports.Album = Album = __decorate([
    (0, typeorm_1.Entity)()
], Album);
//# sourceMappingURL=album.entity.js.map
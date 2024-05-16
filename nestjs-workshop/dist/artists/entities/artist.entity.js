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
exports.Artist = void 0;
const album_entity_1 = require("../../album/entities/album.entity");
const song_entity_1 = require("../../songs/entities/song.entity");
const typeorm_1 = require("typeorm");
let Artist = class Artist {
};
exports.Artist = Artist;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Artist.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Artist.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Artist.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Artist.prototype, "stageName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Artist.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => song_entity_1.Song, (song) => song.artist, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Artist.prototype, "songs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => album_entity_1.Album, (album) => album.artist, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Artist.prototype, "album", void 0);
exports.Artist = Artist = __decorate([
    (0, typeorm_1.Entity)()
], Artist);
//# sourceMappingURL=artist.entity.js.map
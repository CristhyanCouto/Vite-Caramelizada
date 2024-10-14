export const genreConverter = (genre: number) => {
    
    switch (genre) {
        case 0:
            return "0";
        case 1:
            return "2.5d";
        case 2:
            return "2d";
        case 3:
            return "3d";
        case 4:
            return "advergames";
        case 5:
            return "animation";
        case 6:
            return "arcade";
        case 7:
            return "adventure";
        case 8:
            return "action";
        case 9:
            return "basedOnRealLife";
        case 10:
            return "battleRoyale";
        case 11:
            return "beatEmUp";
        case 12:
            return "cards";
        case 13:
            return "casual";
        case 14:
            return "comedy";
        case 15:
            return "racing";
        case 16:
            return "crime";
        case 17:
            return "culinary";
        case 18:
            return "shortFilm";
        case 19:
            return "cyberpunk";
        case 20:
            return "docufiction";
        case 21:
            return "documentary";
        case 22:
            return "drama";
        case 23:
            return "dungeonCrawler";
        case 24:
            return "educational";
        case 25:
            return "espionage";
        case 26:
            return "sports";
        case 27:
            return "strategy";
        case 28:
            return "fantasy";
        case 29:
            return "western";
        case 30:
            return "scienceFiction";
        case 31:
            return "fps";
        case 32:
            return "stealth";
        case 33:
            return "soccer";
        case 34:
            return "war";
        case 35:
            return "hackAndSlash";
        case 36:
            return "horror";
        case 37:
            return "darkHumor";
        case 38:
            return "indie";
        case 39:
            return "jrpg";
        case 40:
            return "maze";
        case 41:
            return "longFilm";
        case 42:
            return "fight";
        case 43:
            return "mafia";
        case 44:
            return "mistery";
        case 45:
            return "mmo";
        case 46:
            return "moba";
        case 47:
            return "openWorld";
        case 48:
            return "musicals";
        case 49:
            return "platform";
        case 50:
            return "policeLiterature";
        case 51:
            return "puzzle";
        case 52:
            return "roguelike";
        case 53:
            return "romance";
        case 54:
            return "rpg";
        case 55:
            return "shotEmUp";
        case 56:
            return "shonen";
        case 57:
            return "simulation";
        case 58:
            return "sitcom";
        case 59:
            return "skate";
        case 60:
            return "survival";
        case 61:
            return "superHero";
        case 62:
            return "suspense";
        case 63:
            return "boardGames";
        case 64:
            return "terror";
        case 65:
            return "thriller";
        case 66:
            return "towerDefense";
        case 67:
            return "tps";
        case 68:
            return "turns";
        case 69:
            return "zombie";
        default:
            return "unknownGenre";
    }
};
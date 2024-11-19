const season = require("./seasonsAnimes");

module.exports = (sequelize, DataTypes) => {
    const Animes = sequelize.define('animes', {
        idanime: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title_en: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        title_pt: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        fk_producer01: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'producers',
                key: 'idproducer'
            }
        },
        fk_producer02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'producers',
                key: 'idproducer'
            }
        },
        fk_producer03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'producers',
                key: 'idproducer'
            }
        },
        fk_producer04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'producers',
                key: 'idproducer'
            }
        },
        fk_producer05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'producers',
                key: 'idproducer'
            }
        },
        fk_creator01: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'creators',
                key: 'idcreator'
            }
        },
        fk_creator02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'creators',
                key: 'idcreator'
            }
        },        
        fk_creator03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'creators',
                key: 'idcreator'
            }
        },        
        fk_creator04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'creators',
                key: 'idcreator'
            }
        },        
        fk_creator05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'creators',
                key: 'idcreator'
            }
        },
        fk_season01: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season06: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season07: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season08: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season09: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season10: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season11: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season12: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season13: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season14: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season15: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season16: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season17: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season18: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season19: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season20: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season21: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season22: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season23: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season24: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season25: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season26: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season27: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season28: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season29: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_season30: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_animes',
                key: 'idseason_anime'
            }
        },
        fk_genre_en01: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_ens',
                key: 'idgenre_en'
            }
        },
        fk_genre_en02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_ens',
                key: 'idgenre_en'
            }
        },
        fk_genre_en03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_ens',
                key: 'idgenre_en'
            }
        },
        fk_genre_en04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_ens',
                key: 'idgenre_en'
            }
        },
        fk_genre_en05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_ens',
                key: 'idgenre_en'
            }
        },
        fk_genre_en06: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_ens',
                key: 'idgenre_en'
            }
        },
        fk_genre_en07: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_ens',
                key: 'idgenre_en'
            }
        },
        fk_genre_en08: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_ens',
                key: 'idgenre_en'
            }
        },
        fk_genre_en09: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_ens',
                key: 'idgenre_en'
            }
        },
        fk_genre_en10: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_ens',
                key: 'idgenre_en'
            }
        },
        fk_genre_pt01: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_pts',
                key: 'idgenre_pt'
            }
        },
        fk_genre_pt02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_pts',
                key: 'idgenre_pt'
            }
        },
        fk_genre_pt03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_pts',
                key: 'idgenre_pt'
            }
        },
        fk_genre_pt04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_pts',
                key: 'idgenre_pt'
            }
        },
        fk_genre_pt05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_pts',
                key: 'idgenre_pt'
            }
        },
        fk_genre_pt06: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_pts',
                key: 'idgenre_pt'
            }
        },
        fk_genre_pt07: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_pts',
                key: 'idgenre_pt'
            }
        },
        fk_genre_pt08: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_pts',
                key: 'idgenre_pt'
            }
        },
        fk_genre_pt09: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_pts',
                key: 'idgenre_pt'
            }
        },
        fk_genre_pt10: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'genre_pts',
                key: 'idgenre_pt'
            }
        },
        fk_rated_pg_en: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'rated_pg_ens',
                key: 'idrated_pg_en'
            }
        },
        fk_rated_pg_pt: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'rated_pg_pts',
                key: 'idrated_pg_pt'
            }
        },
        runtime:{
            type: DataTypes.TIME,
            allowNull: true
        },
        season_count: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        about_anime_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_anime_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cover_anime_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        trailer_anime_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_anime_url01: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_anime_url02: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_anime_url03: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_anime_url04: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_anime_url05: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_anime_url06: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_anime_url07: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_anime_url08: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_anime_url09: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_anime_url10: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        my_rating: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        my_review_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        my_review_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    });
    return Animes;
}
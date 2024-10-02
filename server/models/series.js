const season = require("./seasonsSeries");

module.exports = (sequelize, DataTypes) => {
    const Series = sequelize.define('series', {
        idserie: {
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
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season06: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season07: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season08: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season09: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season10: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season11: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season12: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season13: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season14: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season15: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season16: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season17: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season18: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season19: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season20: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season21: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season22: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season23: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season24: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season25: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season26: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season27: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season28: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season29: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
            }
        },
        fk_season30: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'seasons_series',
                key: 'idseason_serie'
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
        season_count: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        about_serie_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_serie_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cover_serie_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        trailer_serie_url: {
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
    return Series;
}
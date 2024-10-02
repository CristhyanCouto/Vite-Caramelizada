module.exports = (sequelize, DataTypes) => {
    const Movies = sequelize.define('movies', {
        idmovie: {
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
        fk_director01: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'directors',
                key: 'iddirector'
            }
        },
        fk_director02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'directors',
                key: 'iddirector'
            }
        },
        fk_director03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'directors',
                key: 'iddirector'
            }
        },
        fk_director04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'directors',
                key: 'iddirector'
            }
        },
        fk_director05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'directors',
                key: 'iddirector'
            }
        },
        fk_writer01: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'writers',
                key: 'idwriter'
            }
        },
        fk_writer02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'writers',
                key: 'idwriter'
            }
        },
        fk_writer03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'writers',
                key: 'idwriter'
            }
        },
        fk_writer04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'writers',
                key: 'idwriter'
            }
        },
        fk_writer05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'writers',
                key: 'idwriter'
            }
        },
        fk_actor01: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor06: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor07: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor08: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor09: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor10: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor11: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor12: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor13: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor14: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor15: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor16: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor17: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor18: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor19: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
            }
        },
        fk_actor20: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'actors',
                key: 'idactor'
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
        runtime: {
            type: DataTypes.TIME,
            allowNull: true
        },
        budget: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        box_office: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        about_movie_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_movie_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cover_movie_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        trailer_movie_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_movie_url01: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_movie_url02: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_movie_url03: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_movie_url04: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_movie_url05: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_movie_url06: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_movie_url07: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_movie_url08: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_movie_url09: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_movie_url10: {
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
    return Movies;
}
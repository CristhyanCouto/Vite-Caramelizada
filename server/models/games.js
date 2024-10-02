module.exports = (sequelize, DataTypes) => {
    const Games = sequelize.define('games', {
        idgame: {
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
            allowNull: true
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: true,
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
        fk_publisher_games01: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'publisher_games',
                key: 'idpublisher_games'
            }
        },
        fk_publisher_games02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'publisher_games',
                key: 'idpublisher_games'
            }
        },
        fk_publisher_games03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'publisher_games',
                key: 'idpublisher_games'
            }
        },
        fk_publisher_games04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'publisher_games',
                key: 'idpublisher_games'
            }
        },
        fk_publisher_games05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'publisher_games',
                key: 'idpublisher_games'
            }
        },
        fk_plataform01: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'plataforms',
                key: 'idplataform'
            }
        },
        fk_plataform02: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'plataforms',
                key: 'idplataform'
            }
        },
        fk_plataform03: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'plataforms',
                key: 'idplataform'
            }
        },
        fk_plataform04: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'plataforms',
                key: 'idplataform'
            }
        },
        fk_plataform05: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'plataforms',
                key: 'idplataform'
            }
        },
        fk_plataform06: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'plataforms',
                key: 'idplataform'
            }
        },
        fk_plataform07: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'plataforms',
                key: 'idplataform'
            }
        },
        fk_plataform08: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'plataforms',
                key: 'idplataform'
            }
        },
        fk_plataform09: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'plataforms',
                key: 'idplataform'
            }
        },
        fk_plataform010: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'plataforms',
                key: 'idplataform'
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
        about_game_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_game_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cover_game_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        trailer_game_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_game_url01: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_game_url02: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_game_url03: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_game_url04: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_game_url05: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_game_url06: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_game_url07: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_game_url08: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_game_url09: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_game_url10: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        my_rating: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        multiplayer: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        multiplayer_local: {
            type: DataTypes.BOOLEAN,
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
    return Games;
}
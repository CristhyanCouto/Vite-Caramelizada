module.exports = (sequelize, DataTypes) => {
    const SeasonsSeries = sequelize.define('seasons_series', {
        idseason_serie: {
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
        episodes_count_series: {
            type: DataTypes.INTEGER,
            allowNull: true
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
        runtime: {
            type: DataTypes.TIME,
            allowNull: true
        },
        about_season_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_season_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cover_season_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        trailer_season_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_season_url01: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_season_url02: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_season_url03: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_season_url04: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_season_url05: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_season_url06: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_season_url07: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_season_url08: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_season_url09: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_season_url10: {
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
    return SeasonsSeries;
}
module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('books', {
        idbook: {
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
        fk_publisher_en: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'publisher_books',
                key: 'idpublisher_books'
            }
        },
        fk_publisher_pt: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'publisher_books',
                key: 'idpublisher_books'
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
        about_book_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_book_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cover_book_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        page_count: {
            type: DataTypes.INTEGER,
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
    return Books;
}
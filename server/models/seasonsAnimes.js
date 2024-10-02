module.exports = (sequelize, DataTypes) => {
    const SeasonsAnimes = sequelize.define('seasons_animes', {
        idseason_anime: {
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
        episodes_count_animes: {
            type: DataTypes.INTEGER,
            allowNull: true
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
    return SeasonsAnimes;
}
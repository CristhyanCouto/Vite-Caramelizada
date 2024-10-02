module.exports = (sequelize, DataTypes) => {
    const PublisherGames = sequelize.define("publisher_games", {
        idpublisher_games: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_publisher_games: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        headquarters_en: {
            type: DataTypes.STRING(1000),
            allowNull: true
        },
        headquarters_pt: {
            type: DataTypes.STRING(1000),
            allowNull: true
        },
        about_publisher_games_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_publisher_games_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        publisher_games_image_url: {
            type: DataTypes.STRING(10000),
            allowNull: true
        }
    });

    return PublisherGames;
};
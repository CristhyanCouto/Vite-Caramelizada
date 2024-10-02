module.exports = (sequelize, DataTypes) => {
    const PublisherBooks = sequelize.define("publisher_books", {
        idpublisher_books: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_publisher_books: {
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
        about_publisher_books_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_publisher_books_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        publisher_books_image_url: {
            type: DataTypes.STRING(10000),
            allowNull: true
        }
    });

    return PublisherBooks;
};
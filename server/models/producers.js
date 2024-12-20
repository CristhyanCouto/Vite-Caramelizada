module.exports = (sequelize, DataTypes) => {
    const Producers = sequelize.define("producers", {
        idproducer: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_producer: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        headquarters_en: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        headquarters_pt: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        about_producer_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_producer_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        producer_image_url: {
            type: DataTypes.STRING(10000),
            allowNull: true
        }
    });

    return Producers;
};
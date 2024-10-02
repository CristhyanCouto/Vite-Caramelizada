module.exports = (sequelize, DataTypes) => {
    const GenreEns = sequelize.define("genre_ens", {
        idgenre_en: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_genre_en: {
            type: DataTypes.STRING(1000)
        }
    });

    return GenreEns;
};
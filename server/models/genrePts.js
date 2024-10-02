module.exports = (sequelize, DataTypes) => {
    const GenrePts = sequelize.define("genre_pts", {
        idgenre_pt: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_genre_pt: {
            type: DataTypes.STRING(1000)
        }
    });

    return GenrePts;
};
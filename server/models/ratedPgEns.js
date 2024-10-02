module.exports = (sequelize, DataTypes) => {
    const RatedPgEn = sequelize.define("rated_pg_ens", {
        idrated_pg_en: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rating_pg_en: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return RatedPgEn;
};
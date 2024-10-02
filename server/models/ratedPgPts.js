module.exports = (sequelize, DataTypes) => {
    const RatedPgPt = sequelize.define("rated_pg_pts", {
        idrated_pg_pt: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rating_pg_pt: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return RatedPgPt;
};
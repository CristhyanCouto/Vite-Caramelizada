module.exports = (sequelize, DataTypes) => {
    const CurrentStatusPts = sequelize.define("current_status_pts", {
        idcurrent_status_pt: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_current_status_pt: {
            type: DataTypes.STRING(1000)
        }
    });

    return CurrentStatusPts;
};
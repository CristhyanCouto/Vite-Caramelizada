module.exports = (sequelize, DataTypes) => {
    const CurrentStatusEns = sequelize.define("current_status_ens", {
        idcurrent_status_en: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_current_status_en: {
            type: DataTypes.STRING(1000)
        }
    });

    return CurrentStatusEns;
};
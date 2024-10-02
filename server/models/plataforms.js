module.exports = (sequelize, DataTypes) => {
    const Plataforms = sequelize.define('plataforms', {
        idplataform: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_plataform: {
            type: DataTypes.STRING,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
    });

    return Plataforms;
}
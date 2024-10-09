module.exports = (sequelize, DataTypes) => {
    const Actors = sequelize.define("actors", {
        idactor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: true
        },
        fk_actor_current_status_en: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'current_status_ens',
                key: 'idcurrent_status_en',
            }
        },
        fk_actor_current_status_pt: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'current_status_pts',
                key: 'idcurrent_status_pt',
            }
        },
        date_of_death: {
            type: DataTypes.DATE,
            allowNull: true
        },
        city_of_birth_en: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        city_of_birth_pt: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        state_of_birth_en: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        state_of_birth_pt: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        country_of_birth_en: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        country_of_birth_pt: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        about_actor_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_actor_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        actor_image_url: {
            type: DataTypes.STRING(10000),
            allowNull: true
        },
    });

    return Actors;
};
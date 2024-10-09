module.exports = (sequelize, DataTypes) => {
    const Directors = sequelize.define("directors", {
        iddirector: {
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
        fk_director_current_status_en: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'current_status_ens',
                key: 'idcurrent_status_en',
            }
        },
        fk_director_current_status_pt: {
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
        about_director_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        about_director_pt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        director_image_url: {
            type: DataTypes.STRING(10000),
            allowNull: true
        },
    });

    return Directors;
};
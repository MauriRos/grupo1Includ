module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING,
            allowNull: false
        },
        permissionId: {
             type: dataTypes.INTEGER,
             allowNull: true
        }
    };
    let config = {
        timestamps: false,
        tableName: "users"
    }
    const User = sequelize.define(alias,cols,config); 

    User.associate = function (models) {
         User.belongsTo(models.Permission, {
         foreignKey: "permissionId",
         as: "permissions"
     })};


    return User
};
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
            type: dataTypes.VARCHAR(30),
            allowNull: false
        },
        lastName: {
            type: dataTypes.VARCHAR(30),
            allowNull: false
        },
        userName: {
            type: dataTypes.VARCHAR(30),
            allowNull: false
        },
        email: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        password: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        permissionsId: {
            type: dataTypes.VARCHAR(30),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: "users"
    }
    const User = sequelize.define(alias,cols,config);

    User.associate = function (models) {
        User.belongsTo(models.Product, {
        foreignKey: "permissionsId",
        as: "permissions"
    })};
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    return User
};
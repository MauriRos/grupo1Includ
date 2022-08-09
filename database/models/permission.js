module.exports = (sequelize, dataTypes) => {
    let alias = 'Permission'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        permission: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: "permissions"
    }
    const Permission = sequelize.define(alias,cols,config);

    Permission.associate = function (models) {
        Permission.hasMany(models.User, {
        foreignKey: "permissionId",
        as: "permissions"
    })};
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    return Permission
};
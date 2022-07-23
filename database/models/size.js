module.exports = (sequelize, dataTypes) => {
    let alias = 'Size'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        size: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: "sizes" 
    }
    const Size = sequelize.define(alias,cols,config);

    Size.associate = function (models) {
        Size.hasMany(models.Product, {
        foreignKey: "sizeId",
        as: "sizes"
    })};
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    return Size
};
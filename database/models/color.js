module.exports = (sequelize, dataTypes) => {
    let alias = 'Color'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        color: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: "colors"
    }
    const Color = sequelize.define(alias,cols,config);

    Color.associate = function (models) {
        Color.hasMany(models.Product, {
        foreignKey: "colorsId",
        as: "colors"
    })};
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    return Color
};
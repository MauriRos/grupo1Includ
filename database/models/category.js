module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoryProduct'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: "categories"
    }
    const CategoryProduct = sequelize.define(alias,cols,config);

    CategoryProduct.associate = function (models) {
        CategoryProduct.hasMany(models.Product, {
        foreignKey: "categoryProductId",
        as: "categories"
    })};
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    return CategoryProduct
};
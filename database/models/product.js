module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        characteristics: {
            type: dataTypes.STRING,
            allowNull: false
        },
        sizing: {
            type: dataTypes.STRING,
            allowNull: false
        },
        categoryProductId: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        colorId: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        sizeId: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: true
        },
    };
    let config = {
        timestamps: false,
        tableName: "products"
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Product.belongsTo(models.Color, {
        foreignKey: "colorId",
        as: "colors"
    });
        Product.belongsTo(models.CategoryProduct, {
        foreignKey: "categoryProductId",
        as: "categories"
    });
        Product.belongsTo(models.Size, {
        foreignKey: "sizeId",
        as: "sizes"
    })
    }
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    return Product
};
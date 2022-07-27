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
        colorsId: {
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
        image2: {
            type: dataTypes.STRING,
            allowNull: true
        },
        image3: {
            type: dataTypes.STRING,
            allowNull: true
        },
        image4: {
            type: dataTypes.STRING,
            allowNull: true
        },
        image5: {
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
        foreignKey: "colorsId",
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

    return Product
};
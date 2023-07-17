import { Model, DataTypes } from "sequelize";
import dbConnect from "../config/dbConnect.js";
import Product from "./product.js";
const sequelizeInstance = dbConnect.Sequelize;

class Image extends Model {};

Image.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: false
    }
}
,{
    sequelize: sequelizeInstance,
    modelName: 'image',
    timestamps: true,
    freezeTableName: true
});

class ProductImage extends Model {};

ProductImage.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },
    imageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Image,
            key: 'id'
        }
    },
    isMain: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}
,{
    sequelize: sequelizeInstance,
    modelName: 'productImage',
    timestamps: true,
    freezeTableName: true
});


export { Image, ProductImage };


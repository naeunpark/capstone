import { Model, DataTypes } from "sequelize";
import dbConnect from "../config/dbConnect.js";
import Category from "./category.js";
const sequelizeInstance = dbConnect.Sequelize;

class Product extends Model {};

Product.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    name: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    shortDescription:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 0
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        }
    }
}
,{
    sequelize: sequelizeInstance,
    modelName: 'product',
    timestamps: true,
    freezeTableName: true
});

export default Product;
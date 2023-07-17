import { Model, DataTypes } from "sequelize";
import dbConnect from "../config/dbConnect.js";
import User from "./user.js";
import Product from "./product.js";
const sequelizeInstance = dbConnect.Sequelize;

class Cart extends Model {};

Cart.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}
,{
    sequelize: sequelizeInstance,
    modelName: 'cart',
    timestamps: true,
    freezeTableName: true
});

class Cartitem extends Model {};

Cartitem.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Product,
            key: 'id'
        }
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Cart,
            key: 'id'
        }
    },
    qty: {
        type: DataTypes.INTEGER, allowNull: false
    }
}
,{
    sequelize: sequelizeInstance,
    modelName: 'cartitem',
    timestamps: true,
    freezeTableName: true
});

export { Cart, Cartitem };
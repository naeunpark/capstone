import { Model, DataTypes } from "sequelize";
import dbConnect from "../config/dbConnect.js";
import User from "./user.js";
import Product from "./product.js";
const sequelizeInstance = dbConnect.Sequelize;

class Orders extends Model {};

Orders.init({
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
    address: {
        type: DataTypes.STRING, allowNull: false
    },
    contact: {
        type: DataTypes.STRING, allowNull: false
    },
    orderStatus: {
        type: DataTypes.STRING, allowNull: false
    }
}
,{
    sequelize: sequelizeInstance,
    modelName: 'orders',
    timestamps: true,
    freezeTableName: true
});

class Orderitem extends Model {};

Orderitem.init({
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
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Orders,
            key: 'id'
        }
    },
    qty: {
        type: DataTypes.INTEGER, allowNull: false
    }
}
,{
    sequelize: sequelizeInstance,
    modelName: 'orderitem',
    timestamps: true,
    freezeTableName: true
});

export {Orders, Orderitem};
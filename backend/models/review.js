import { Model, DataTypes } from "sequelize";
import dbConnect from "../config/dbConnect.js";
import Product from "./product.js";
import User from "./user.js";
const sequelizeInstance = dbConnect.Sequelize;

class Review extends Model {};

Review.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    review: {
        type: DataTypes.STRING,
        allowNull: false
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
    }
}
,{
    sequelize: sequelizeInstance,
    modelName: 'review',
    timestamps: true,
    freezeTableName: true
});

export default Review;
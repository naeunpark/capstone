import { Model, DataTypes } from "sequelize";
import dbConnect from "../config/dbConnect.js";
const sequelizeInstance = dbConnect.Sequelize;

class Category extends Model {};

Category.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    }
}
,{
    sequelize: sequelizeInstance,
    modelName: 'category',
    timestamps: true,
    freezeTableName: true
});

export default Category;
import { Model, DataTypes } from "sequelize";
import bcrypt from 'bcrypt';
import dbConnect from "../config/dbConnect.js";
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {};

User.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement:true, 
        primaryKey: true, unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.BLOB("long"),
        allowNull: true,
        defaultValue: null
    },
    usertype: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: "customer"
    }
},{
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSaltSync(10, 'a');
                user.password = bcrypt.hashSync(user.password, salt);
            }
        },
        beforeUpdate:async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSaltSync(10, 'a');
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }
        },
    sequelize: sequelizeInstance,
    modelName: 'user',
    timestamps: true,
    freezeTableName: true
});


export default User;
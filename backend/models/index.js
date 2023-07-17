import User from "./user.js";
import Category from "./category.js";
import Product from "./product.js";
import Review from "./review.js";
import { Cart, Cartitem } from "./cart.js";
import { Orders, Orderitem } from "./order.js";
import { Image, ProductImage } from "./image.js";

Category.hasMany(Product, { foreignKey: 'categoryId'});
Product.belongsTo(Category);

User.hasMany(Orders, {foreignKey: 'userId'});
Orders.belongsTo(User);
User.hasMany(Cart, {foreignKey: 'userId'});
Cart.belongsTo(User);
User.hasMany(Review, {foreignKey:'userId'});
Review.belongsTo(User);

Product.belongsToMany(Image, {through: 'productImage'});
Image.belongsToMany(Product, {through:'productImage'});
Product.hasMany(Review, {foreignKey: 'productId'});
Review.belongsTo(Product);
Product.hasMany(Cartitem, {foreignKey: 'productId'});
Cartitem.belongsTo(Product);
Product.hasMany(Orderitem, {foreignKey: 'productId'});
Orderitem.belongsTo(Product);

Cart.hasMany(Cartitem, {foreignKey: 'cartId'});
Cartitem.belongsTo(Cart);

Orders.hasMany(Orderitem, { foreignKey: 'orderId' });
Orderitem.belongsTo(Orders);

async function init() {
    await User.sync();
    await Category.sync();
    await Product.sync();
    await Review.sync();
    await Cart.sync();
    await Cartitem.sync();
    await Orders.sync();
    await Orderitem.sync();
    await Image.sync();
    await ProductImage.sync();
};

init();

const Models = {
    User,
    Category,
    Product,
    Review,
    Cart,
    Cartitem,
    Orders,
    Orderitem,
    Image,
    ProductImage
}

export default Models;
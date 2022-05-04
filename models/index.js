const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
    as: 'products_in_category',
});
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category',
});

Product.belongsToMany(Tag, {
    through: ProductTag,
    as: 'tags',
});

Tag.belongsToMany(Product, {
    through: ProductTag,
    as: 'products',
});

module.exports = { Category, Product, Tag, ProductTag };

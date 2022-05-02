const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Product.hasMany(Tag, {
    foreignKey: ''
})

module.exports = { Category, Product, Tag, ProductTag };

const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const tagRoutes = require('./tagRoutes');
const productTagRoutes = require('./productTagRoutes');

//router.use('/categories', categoryRoutes);
//router.use('/products', productRoutes);
//router.use('/tags', tagRoutes);
//router.use('/protags', productTagRoutes);

module.exports = router;

const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Mount category, product, and tag routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Catch-all route for handling unknown routes
router.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = router;
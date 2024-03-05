const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../../models');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: Category, attributes: ['id', 'category_name'] },
        { model: Tag, attributes: ['id', 'tag_name'], through: { attributes: [] } } // Exclude the join table attributes
      ]
    });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get one product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        { model: Category, attributes: ['id', 'category_name'] },
        { model: Tag, attributes: ['id', 'tag_name'], through: { attributes: [] } } // Exclude the join table attributes
      ]
    });
    if (!product) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (req.body.tagIds && req.body.tagIds.length) {
      await product.addTags(req.body.tagIds); // Add tags to the product
    }
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Update a product by id
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    await product.update(req.body);
    if (req.body.tagIds && req.body.tagIds.length) {
      await product.setTags(req.body.tagIds); // Update product's tags
    }
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Delete a product by id
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
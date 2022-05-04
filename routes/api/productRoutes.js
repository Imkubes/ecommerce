const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');


// GET all products
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: "category"
    });
    res.status(200).json(productData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a single Product
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {

    });

    if (!productData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a product
router.post('/', async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Update a Product
router.put('/:id', async (req, res) => {
  try {
    const productData = await Product.update({product_name: "Ground Beef", price: 18.24},{
      where: {
        id: req.params.id
      }
    });

    if (!productData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
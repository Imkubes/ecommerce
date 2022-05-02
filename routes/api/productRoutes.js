const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');


// GET all products
router.get('/', async (req, res) => {
    try {
      const productData = await Product.findAll();
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // CREATE a traveller
router.post('/', async (req, res) => {
    try {
      const productData = await Product.create(req.body);
      res.status(200).json(productData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a traveller
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
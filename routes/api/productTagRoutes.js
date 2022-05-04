const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');


// GET all ProductTags
router.get('/', async (req, res) => {
  try {
    const proTagData = await ProductTag.findAll({

    });
    res.status(200).json(proTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single ProductTag
router.get('/:id', async (req, res) => {
  try {
    const proTagData = await ProductTag.findByPk(req.params.id, {

    });

    if (!tagData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(proTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a ProductTag
router.post('/', async (req, res) => {
  try {
    const proTagData = await ProductTag.create(req.body);
    res.status(200).json(proTagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a ProductTag
router.delete('/:id', async (req, res) => {
  try {
    const proTagData = await ProductTag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!proTagData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(proTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
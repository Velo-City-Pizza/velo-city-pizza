// This is the Admin-only API for updating the categories from Square catalog.
// Base URI is /admin/catalog/category [i.e, router.get('/:id_here') actually routes to /admin/catalog/category/:id_here]

const express = require('express');
const {
    createCategory
} = require('../controllers/categoryController');

const router = express.Router();

// GET all categories
router.get('/', (req, res) => {
    res.json({msg:'GET all categories'});
});

// GET a single category
router.get('/:id', (req, res) => {
    res.json({msg:'GET a single category'});
});

// POST a new category
router.post('/', createCategory);

// UPDATE a category
router.delete('/:id', (req, res) => {
    res.json({msg:'UPDATE a category'});
});

// DELETE a category
router.patch('/:id', (req, res) => {
    res.json({msg:'DELETE a category'});
});

module.exports = router;
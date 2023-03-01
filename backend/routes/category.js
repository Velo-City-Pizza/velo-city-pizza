// This is the Admin-only API for updating the categories from Square catalog.
// Base URI is /admin/catalog/category [i.e, router.get('/:id_here') actually routes to /admin/catalog/category/:id_here]

const express = require('express')
const {
    getCategories,
    getCategoryById,
    createCategory,
    deleteCategory,
    updateCategory
} = require('../controllers/categoryController')

const router = express.Router()

// GET all categories
router.get('/', getCategories)

// GET a single category
router.get('/:id', getCategoryById)

// POST a new category
router.post('/', createCategory)

// DELETE a category
router.delete('/:id', deleteCategory)

// UPDATE a category
router.patch('/:id', updateCategory)

module.exports = router
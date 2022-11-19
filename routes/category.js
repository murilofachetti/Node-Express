const express = require("express");
const router = express.Router();

const CategoryController = require ('../controllers/CategoryController');

const categoryCtrl = new CategoryController();

router.get ("/", async (req, res) => {
    const result = await categoryCtrl.getCategories();
    res.send(result);
});

router.get ("/:id", async (req, res) => {
    const result = await categoryCtrl.getCategory(req.params.id);
    res.send(result)
});

router.post ("/", async (req, res) => {
    res.send("Olá Mundo category!!")
});

router.put ("/:id", async (req, res) => {
    res.send("Olá Mundo category!!")
});

router.patch ("/:id", async (req, res) => {
    res.send("Olá Mundo category!!")
});

router.delete ("/:id", async (req, res) => {
    res.send("Olá Mundo category!!")
});

module.exports = router;
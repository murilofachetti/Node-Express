const express = require("express");
const router = express.Router();

const CategoryController = require ('../controllers/CategoryController');

const categoryCtrl = new CategoryController();

router.get ("/", async (req, res) => {
    const result = await categoryCtrl.getCategories(req.query);
    res.send(result);
});

router.get ("/:id", async (req, res) => {
    const result = await categoryCtrl.getCategory(req.params.id);
    res.send(result)
});

router.post ("/", async (req, res) => {
    const result = await categoryCtrl.createCategory(req.body);
    res.send(result);
});

router.patch ("/:id", async (req, res) => {
    const result = await categoryCtrl.updateCategory(req.params.id, req.body);
    res.send(result);
});

router.delete ("/:id", async (req, res) => {
    const result = await categoryCtrl.deleteCategory(req.params.id);

    res.statusCode = result.status;
    res.send(result.msg);
});

module.exports = router;
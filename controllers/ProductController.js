const { Sequelize } = require('sequelize');
const Product = require('../models/Product');
const GenericController = require("./GenericController");
const Op = Sequelize.Op;

class ProductController extends GenericController {
    constructor() {
        super();
    }

    async getProducts(params){
        let result;
        const pagination = this.generatePagination(params),
              limit = pagination[0],
              page = pagination[1];


        const paramsLimit = {
            offset: page * limit,
            limit: parseInt(limit),
        };
        
        if(params.q) {
            result = await Product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${params.q.toLowerCase()}%`,
                    },
                },
               ...paramsLimit,
            });
        }else{
            result = await Product.findAll(paramsLimit);
        }
        return result;
    }

    async getProduct(id){
        const result = await Product.findByPk(id);
        return result;
    }

    async createProduct(data) {
        const product = await Product.create(data);
        return `Produto ${product.id} criado com sucesso!`;
    }

    async updateProduct(id, data){
        await product.update(data, {
            where: {
                id: id
            }
        });
        return `Produto ${id} atualizado com sucesso!`;
    }

    async deleteProduct(id){
        await Product.destroy({
            where: {
                id: id,
            }
        })
        return `Produto ${id} deletado com sucesso!`;
    }
}

module.exports = ProductController;
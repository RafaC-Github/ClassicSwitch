
const { Product, Category,Sequelize } = require('../models/index.js')
const { Op } =Sequelize;
const ProductController = {
    getAll(req,res){
        Product.findAll({
            include:[Category]
        })
        .then(products=>res.send(products))
    },
    insert(req,res){
        Product.create({...req.body})
        .then(product=>res.send(product))
    },
    getOne(req,res){
        Product.findByPk(req.params.id, {
            include: [Category]
        })
        .then(product => res.send(product))
        .catch(error=>{
            console.log(error);
            res.status(500).send({message: 'Ha surgido un error al intentar tramitar la petición.', error})
        })

    },
    getOneByName(req,res){
        Product.findAll({
            where:{
                name:{
                    [Op.like]:`%${req.params.name}%`
                }
            },
            include:[Category]
        })
        .then(products=>res.send(products))
    }
}
module.exports = ProductController;
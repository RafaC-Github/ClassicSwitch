const { Category } = require('../models/index.js')
const CategoryController = {
    getAll(req,res){
        Category.findAll()
        .then(categories=>res.send(categories))
    },
    insert(req,res){
        Category.create({name:req.body.name})
        .then(category=>res.send(category))
    }
}
module.exports = CategoryController;
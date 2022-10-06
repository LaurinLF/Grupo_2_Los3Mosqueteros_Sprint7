const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const {Products, Images} = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// const universalModel = require('../model/universalModel');
// const productModel = universalModel('products');

const mainController = {
    home: async (req,res) =>{
        try {
            const allProductos = await db.Products.findAll({
                include: [Images]
            })
            const saleProducts = allProductos.filter( product => product.discount != 0 );
            res.render("productos/home",
            {
                title:"Home",
                saleProducts
            }
            )
        } catch (error){
            res.json({error: error.message})
        }
    },
}

module.exports = mainController
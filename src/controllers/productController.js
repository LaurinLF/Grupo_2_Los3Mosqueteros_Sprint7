const db = require('../database/models');
const path = require('path');
const fs = require('fs');
const { Op }= require('sequelize');
const { validationResult } = require("express-validator");

//const universalModel = require('../model/universalModel'); 
//const productModel = universalModel('products');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {

    listadoProductos: async (req,res) =>{
        try {
            const allProducts = await db.Products.findAll({
                include: [db.Images]
            }) // productos todo lo que labura con el array de productos va con allproducts
            const table = allProducts.filter( product => product.id_category == "2" );
            const coffeeTable = allProducts.filter( product => product.id_category == "4" );
            const desk = allProducts.filter( product => product.id_category == "1" );
            const mirror = allProducts.filter( product => product.id_category == "3" );
            
            res.render("productos/products",
            {
                title: "Productos",
                table,
                coffeeTable,
                desk,
                mirror
            }
            )
        } catch (error) {
            res.json({error: error.message});
        }
        
    },

    
    carrito:(req,res) =>{
        res.render("productos/productCart",
        {
            title: "Carrito",
            
        }
        )
    },

    // Detail

    detail: async (req,res) =>{
        try {            
            const id = +req.params.id;
            const product = await db.Products.findByPk(id,{
                include:[db.Images, db.Colors, db.Categories]
            });
            res.render("./productos/productDetail",
            {
                title: "Detalle",
                product,
                toThousand
    
            }
            )
        } catch (error) {
            res.json({error: error.message});
        }

    },

   // Create - Form to create

    create: async (req,res) =>{
        try {
            const colors = await db.Colors.findAll();
            const categories = await db.Categories.findAll()    
            res.render("productos/addProduct", {colors, categories, title: "Crear producto"},)
        } catch (error) {
            res.json({error: error.message}); 
        }
    },

    // Create -  Method to store
   /* store: async (req, res) => {
		try {
            const files = req.files
            
            const resultadosValidaciones = validationResult(req);
            if (!resultadosValidaciones.isEmpty()){
    
                files.forEach( file => {
                    const filePath = path.join(__dirname, `../../public/images/products/${file.filename}`);
                    fs.unlinkSync(filePath);
                })
                const colors = await db.Colors.findAll();
                const categories = await db.Categories.findAll()
                return res.render('./productos/addProduct', {
                    title: "Crear producto",
                    errors: resultadosValidaciones.mapped(),
                    // oldData son los datos recién cargados es decir el req.body
                    oldData: req.body,
                    colors,
                    categories
                })
            }
            let product = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
                id_category: req.body.category,
                measures: req.body.measures,
                id_color: req.body.color,
            }
            let images = []
            const nuevoProducto = await db.Product.create(product);
            for(let i = 0 ; i<files.length;i++) {
                images.push({
                    path: files[i].filename,
                    id_product: nuevoProducto.id
                })
            }
            if (images.length > 0) {
                await db.Images.bulkCreate(images)
                res.redirect('/products')
            } else {
                await db.Images.create([{
                    path: 'default-product-image.png',
                    id_product: nuevoProducto.id
                }])
                res.redirect('/products')
            }
            
        } catch (error) {
            res.json({error: error.message}); 
        }

	},*/
    store: async (req, res) => {
		try {
            const files = req.files
            let product = req.body
            const resultadosValidaciones = validationResult(req);
            if (resultadosValidaciones.isEmpty()){
                let images = []
                const nuevoProducto = await db.Products.create(product);
                for(let i = 0 ; i<files.length;i++) {
                    images.push({
                        path: req.files[i].filename,
                        id_product: nuevoProducto.id
                    })
                }
                if (images.length > 0) {
                    await db.Images.bulkCreate(images)
                    res.redirect('/products')

                } else {
                    await db.Images.create([{
                        path: 'default-product-image.png',
                        id_product: product.id
                    }])
                    res.redirect('/products')
                }
             } else {
                let {files} = req;
                if (req.files) {
                for (let i = 0 ; i< files.length; i++) {
                    //fs.unlinkSync(path.join(__dirname, `../../public/images/products/${files[i].filename}`));
                    fs.unlinkSync(path.resolve(__dirname, `../../public/images/products/${files[i].filename}`));
                }
                };
                    const colors = await db.Colors.findAll();
                    const categories = await db.Categories.findAll()
                    return res.render('./productos/addProduct', {
                        title: "Crear producto",
                        errors: resultadosValidaciones.mapped(),
                        // oldData son los datos recién cargados es decir el req.body
                        oldData: req.body,
                        colors,
                        categories
                    })
                }
            
        } catch (error) {
            res.json({error: error.message}); 
        }
	},

    // Update - Form to edit

    edit: async (req,res) =>{
        try {
            const colors = await db.Colors.findAll();
            const categories = await db.Categories.findAll()
            let idToUpdate = +req.params.id
            const productToEdit = await db.Products.findByPk(idToUpdate,{
                include:[db.Images, db.Colors, db.Categories]
            });
            
            res.render("./productos/editProduct",
            {
                title: "Editar producto",
                productToEdit,
                colors,
                categories,
                idToUpdate
            }
            )
        } catch (error) {
            res.json({error: error.message}); 
        }
    },

    // Update - Method to update

    update: async (req, res) => {
		try {
            const files = req.files
            let idToUpdate = req.params.id;
    
            const resultadosValidaciones = validationResult(req);
            console.log(resultadosValidaciones);
           
            // Con este if preguntamos si hay errores de validación
            if (!resultadosValidaciones.isEmpty()){
                console.log("----- ojo HAY ERRORES -----------------")
                
                // Si hay errores borramos los archivos que cargó multer
                if(files){
                    for (let i = 0 ; i< files.length; i++) {
                        fs.unlinkSync(path.resolve(__dirname, '../../public/images/products/'+files[i].filename))
                    } 
                }
                // files.forEach( file => {
                //     const filePath = path.join(__dirname, `../../public/images/products/${file.filename}`);
                //     fs.unlinkSync(filePath);
                // })
                
                console.log("-------- my body -------------------")
                console.log(req.body);  
                const colors = await db.Colors.findAll();
                const categories = await db.Categories.findAll()    
                const productToEdit = await db.Products.findByPk(idToUpdate);;
    
                return res.render('./productos/editProduct', {
                    title: "Editar producto",
                    productToEdit,
                    errors: resultadosValidaciones.mapped(),
                    oldData: req.body,
                    colors,
                    categories
                })
            }

            let dataUpdate = req.body
            let images = []
            const product = await db.Products.update({
                ...dataUpdate
            }, {
                where: {
                    id: idToUpdate,
                }
            });

            for(let i = 0 ; i<files.length;i++) {
                images.push({
                    path: files[i].filename,
                    id_product: idToUpdate
                })
            }
            if (images.length > 0) {
                const oldImages = await db.Images.findAll({where: {id_product: idToUpdate}})
                oldImages.forEach( image => {
                    fs.unlinkSync(path.resolve(__dirname, '../../public/images/products/'+image.path))
                })
                await db.Images.destroy({where: {id_product: idToUpdate}})
                await db.Images.bulkCreate(images)
            }
            res.redirect('/products');
             /* else {
                await db.Images.destroy({where: {id_product: idToUpdate}})
                await db.Images.create({
                    path: 'default-product-image.png',
                    id_product: idToUpdate
                })
                res.redirect('/products')
            } */
        } catch (error) {
            res.json({error: error.message}); 
        }

	},


    // Update - Method to delete

    destroy: async (req,res) => {
        try {
            const { id } = req.params;
            let imagenesBorrar = await db.Images.findAll({where: {id_product: id}});
            console.log("Estos estoy borrando:" + imagenesBorrar);
            if (imagenesBorrar) {
                let filesBorrar = imagenesBorrar.filter(image => image.path != 'default-product-image.png');
                for (let i = 0 ; i< filesBorrar.length; i++) {
                    if (filesBorrar[i].path != null ) {
                        fs.unlinkSync(path.resolve(__dirname, '../../public/images/products/'+filesBorrar[i].path))
                    }
                }
                await db.Images.destroy({
                    where: {
                        id_product: id
                    }               
                }, {
                    force: true
                })
            };
            
            await db.Products.destroy({
                where: {
                    id
                }
            }, {
                force: true
            });
            res.redirect("/products");
        } catch (error) {
            res.json(error.message)
        }
    },

    search: async (req,res) => {
        try {
            let busqueda = req.query.search;
            const products = await db.Products.findAll({
                    include: [db.Images],
                    where: { description: { [Op.like]: '%' + busqueda + '%' } },
            })
            res.render('productos/search', {
                title: "Search", 
                products,
                toThousand,
                busqueda, 
            })
        } catch (error) {
            res.json({error: error.message});
        }
        
    },

}

module.exports = productController
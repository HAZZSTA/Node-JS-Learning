const ProductModel = require('../models/productModel')//import product model file

//render add products page logic
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });//this object contains variables that arepassed into the EJS template (just the vars not the object itself)
};

//Add product logic
exports.postAddproduct = (req, res, next) => {
    const product = new ProductModel(req.body.title);//create product using product class in model file
    product.save();//save 
    res.redirect('/');//send user to shop page (below)
};

//Render shop page with products
exports.getProducts = (req, res, next) => {
    ProductModel.fetchAll((products) => {
        res.render('shop', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });//this object contains variables that arepassed into the EJS template (just the vars not the object itself)
    });//fetch all proiducts from product class in model
    
};
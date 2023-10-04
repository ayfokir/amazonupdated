const express = require( 'express' );
const router = express.Router();
const installRouter = require( './install.router' )
const addProductRouter = require( './addProduct.router' )
const addProductImage = require('./addProductImage.router')
const getProduct = require( './getProduct.router' )
const addOrderInformation = require( './addOrderInformation.route' )
const addOrder = require( './addOrder.route' )
const getOrder = require( './getOrder.route' )
const updateProduct = require( './update.router' )
const updateProductImage = require('./updateProductImage.router')
const deleteProduct = require('./delete.router')
router.use( installRouter );
router.use( addProductRouter );
router.use( addProductImage );
router.use( getProduct );
router.use( addOrderInformation );
router.use( addOrder );
router.use( getOrder );
router.use( updateProduct )
router.use(updateProductImage)
router.use(deleteProduct)


module.exports = router;


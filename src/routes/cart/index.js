const express = require('express')
const router = express.Router()
const cartController = require('../../controllers/cart.controller')
const errorHanlder = require('../../core/error.response')
const { authentication } = require('../../auth/authUtils')


router.use('/', errorHanlder.functionHanlder(authentication))
router.post('/products', errorHanlder.functionHanlder(cartController.addToCart))
router.patch('/products', errorHanlder.functionHanlder(cartController.updateProductQuantity))
module.exports = router

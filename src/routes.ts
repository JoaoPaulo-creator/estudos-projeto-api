import path from 'node:path'
import multer from 'multer'

import { Router } from 'express'
import { ListOrdersControllers } from './controllers/order/ListOrderController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'

import { listCaregories } from './useCases/categories/listCategories'
import { updateCaregory } from './useCases/categories/updateCategory'
import { createProduct } from './useCases/products/createProducts'
import { listProducts } from './useCases/products/listProducts'
import { listProductsByCategory } from './useCases/categories/listCateogyByProduct'
import { createOrder } from './useCases/orders/createOrder'
import { changeOrderStatus } from './useCases/orders/changeOrderStatus'
import { cancelOrder } from './useCases/orders/cancelOrder'

// middlware utilizado para salvar uma imagem em disco
// Este será utiliado no endpoint de cadastro de produtos, onde será necessário salvar imagens
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'))
    },
    // adicionado um formato de arquivo para quando a imagem for salva no server
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    },
  }),
})

export const router = Router()

router.patch('/categories/:categoryId', updateCaregory)
router.get('/categories', listCaregories)
router.post('/categories', CreateCategoryController)

router.get('/categories/:categoryId/products', listProductsByCategory)

//categorias

router.get('/products', listProducts)
// o argumento image será o nome da propriedade passada no multipart form data
router.post('/products', upload.single('image'), createProduct)

router.get('/orders', ListOrdersControllers)
router.post('/orders', createOrder)

router.patch('/orders/:orderId', changeOrderStatus)

router.delete('/orders/:orderId', cancelOrder)

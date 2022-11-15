import { Router } from 'express'
import { createCaregory } from './useCases/categories/createCategory'
import { listCaregories } from './useCases/categories/listCategories'
import { updateCaregory } from './useCases/categories/updateCategory'

export const router = Router()

router.patch('/categories/:categoryId', updateCaregory)
router.get('/categories', listCaregories)
router.post('/categories', createCaregory)

router.get('/categories/:categoryId/products', (req, res) => {
    return res.status(201).json({message: 'Ola, mundo'})
})



router.get('/products', (req, res) => {
    return res.status(201).json({message: 'Ola, mundo'})
})

router.post('/products', (req, res) => {
    return res.status(201).json({message: 'Ola, mundo'})
})

router.get('/orders', (req, res) => {
    return res.status(201).json({message: 'Ola, mundo'})
})

router.post('/orders', (req, res) => {
    return res.status(201).json({message: 'Ola, mundo'})
})

router.patch('/orders/:oderdId', (req, res) => {
    return res.status(201).json({message: 'Ola, mundo'})
})

router.delete('/orders/:oderdId', (req, res) => {
    return res.status(201).json({message: 'Ola, mundo'})
})
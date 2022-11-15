import { Router } from 'express'

export const router = Router()

router.get('/categories', (req, res) => {
    return res.status(201).json({message: 'Ola, mundo'})
})

router.post('/categories', (req, res) => {
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
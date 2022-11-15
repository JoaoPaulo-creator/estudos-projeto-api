import express from 'express'
import mongoose from 'mongoose'
import { router } from './routes'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()


const DB_USER = process.env.DB_USER
const DB_PWD = process.env.DB_PASS


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PWD}@ecommercecrudapi.cxzqozi.mongodb.net/?retryWrites=true&w=majority`)
	.then(() =>{
		const app = express()
		const PORT = 3001

        app.use(router)

        app.listen(PORT, () =>{
			console.log(`🚀 Server rodando na porta em : http://localhost:${PORT}`)
		})
	})
	.catch(error => {
		console.error(`Um erro ocorreu ao tentar se conectar com o banco de dados: ${error}`)
	})
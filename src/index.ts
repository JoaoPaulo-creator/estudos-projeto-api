
import path from 'node:path'
import express from 'express'
import mongoose from 'mongoose'
import { router } from './routes'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()


const DB_USER = process.env.DB_USER
const DB_PWD = process.env.DB_PASS


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PWD}@ecommercecrudapi.cxzqozi.mongodb.net/?retryWrites=true&w=majority`)
	.then(() =>{
        console.log('👍 Conectado com sucesso ao banco de dados')
		const app = express()
		const PORT = 3001

        /*
         * quando o usuário acessar a rota /uploads, então a imagem cadastrada deverá ser retornada para ele
         * de forma estática
        */

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
        app.use(express.json())
        app.use(router)

        app.listen(PORT, () =>{
			console.log(`🚀 Server rodando na porta em : http://localhost:${PORT}`)
		})
	})
	.catch(error => {
		console.error(`Um erro ocorreu ao tentar se conectar com o banco de dados: ${error}`)
	})
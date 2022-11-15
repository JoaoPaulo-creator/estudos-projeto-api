import {model, Schema} from 'mongoose'

export const Order = model('Order', new Schema({
	table: {
		type: String,
		required: true
	},
    status: {
        type: String,
        enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
        default: 'WAITING'
    },
    createdAt:{
        type: Date,
        // Se utilizar a função now(), o mongoose vai carregar o timestamp no momento em que o dado for carregado
        // Sem os parenteses, o timestamp atual será puxado no momento em que um dado for criado/salvo
        default: Date.now
    },
    products: {
        required: true,
        type: [{
            product: Schema.Types.ObjectId,
            required: true,
            ref: 'Product'
        }]
    },
    quantity: {
        type: Number,
        default: 1
    }

}))
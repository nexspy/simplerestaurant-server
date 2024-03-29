/**
 * 
 * Model : Order
 * 
 */
import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
    foods: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodModel'
        },
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        pricePerItem: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
    }],
    table: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    },
    creator: {
        type: Number,
        default: 1
    }
});

const OrderModel = mongoose.model('OrderModel', OrderSchema);

export default OrderModel;
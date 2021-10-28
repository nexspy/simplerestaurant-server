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
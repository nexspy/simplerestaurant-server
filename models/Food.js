/**
 * 
 * Model : Food Item
 * 
 */

import mongoose from 'mongoose';

const FoodSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: false
    },
    price: {
        type: Number,
    },
    veg: {
        type: Boolean
    },
    status: {
        type: Boolean
    },
});

const FoodModel = mongoose.model('FoodModel', FoodSchema);

export default FoodModel;
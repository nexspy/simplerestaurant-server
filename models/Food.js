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
    }
});

const FoodModel = mongoose.model('FoodModel', FoodSchema);

export default FoodModel;
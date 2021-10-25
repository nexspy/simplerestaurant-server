/**
 * 
 * Model : Menu
 * 
 */
import mongoose from 'mongoose';

const MenuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean
    },
    foods: [ { type : mongoose.Schema.Types.ObjectId, ref: 'FoodModel' } ]
});

const MenuModel = mongoose.model('MenuModel', MenuSchema);

export default MenuModel;
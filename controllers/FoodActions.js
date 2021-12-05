import FoodModel from '../models/Food.js';

export const actionPublishFood = async (req, res) => {
    var success = false;
    var message = 'could not complete action';
    var foods = [];

    try {

        // publis food in database
        var ids = req.body.ids;

        const result = await FoodModel.updateMany(
            { _id: { $in: ids } },
            { $set: { status: true } }
        );

        message = 'Published foods successfully';
        success = true;

        res.status(200).json({
            success: success,
            message: message,
            ids: ids,
            result: result,
        });
    } catch (error) {
        res.status(404).json({
            success: success,
            message: message,
            foods: [],
        });
    }
}

export const actionUnpublishFood = async (req, res) => {
    var success = false;
    var message = 'could not complete action';
    var foods = [];

    try {

        // unpublish food in database
        var ids = req.body.ids;

        const result = await FoodModel.updateMany(
            { _id: { $in: ids } },
            { $set: { status: false } }
        );

        message = 'Unpublished foods successfully';
        success = true;

        res.status(200).json({
            success: success,
            message: message,
            ids: ids,
            result: result,
        });
    } catch (error) {
        res.status(404).json({
            success: success,
            message: message,
            foods: [],
        });
    }
}

export const actionDeleteFood = async (req, res) => {
    var success = false;
    var message = 'could not complete action';
    var foods = [];

    try {

        // delete food in database
        var ids = req.body.ids;

        const result = await FoodModel.deleteMany(
            { _id: { $in: ids } }
        );

        message = 'Deleted foods successfully';
        success = true;

        res.status(200).json({
            success: success,
            message: message,
            ids: ids,
            result: result,
        });
    } catch (error) {
        res.status(404).json({
            success: success,
            message: message,
            foods: [],
        });
    }
}
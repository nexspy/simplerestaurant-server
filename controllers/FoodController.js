import express from "express";
import mongoose from "mongoose";

import FoodModel from '../models/Food.js';

export const getFoodItems = async (req, res) => {
    var success = false;
    var message = "no food item found";

    try {
        const body = req.body;

        var page = parseInt(req.query.page);
        var perpage = parseInt(req.query.perpage);
        if (page == NaN) {
            page = 0;
        }
        if (perpage == NaN) {
            perpage = 10;
        }
        
        
        const foods = await FoodModel.find().skip(page*perpage).limit(perpage);

        success = true;
        message = "loaded food item successfully";
        if (foods.length <= 0) {
            message = "no food found";
        }

        res.status(200).json({
            success: success,
            message: message,
            foods: foods,
        });
    } catch (error) {
        res.status(404).json({
            success: success,
            message: message,
            foods: [],
        });
    }
}

export const saveFoodItem = async (req, res) => {
    var success = false;
    var message = "could not save the food item";

    try {
        const body = req.body;

        const food = new FoodModel(body);
        food.save();

        success = true;
        message = "food item was created successfully";

        res.status(200).json({
            success: success,
            message: message,
            food: food,
        });

    } catch (error) {
        res.status(404).json({
            success: success,
            message: message,
            food: false,
        });
    }
}

export const deleteFoodItem = async (req, res) => {
    var success = false;
    var message = "could not delete the food item";

    try {
        
        const id = req.params.foodId;

        const food = await FoodModel.deleteOne({
            _id: id,
        });
    
        success = true;
        message = "food item was deleted successfully";

        if (typeof food.deletedCount !== "undefined") {
            if (food.deletedCount <= 0) {
                message = "no record found to delete";
            }
        }

        res.status(200).json({
            success: success,
            message: message,
            food: food,
        });

    } catch (error) {
        res.status(404).json({
            success: success,
            message: message,
            food: false,
        });
    }
}

export const updateFoodItem = async (req, res) => {
    var success = false;
    var message = "could not update the food item";

    try {
        const body = req.body;
        const id = req.params.foodId;

        const result = await FoodModel.updateOne(
            { _id: id },
            { $set: body }
        );

        if (result.nModified) {
            success = true;
            message = "the food item was updated";
        }

        res.status(200).json({
            success: success,
            message: message,
            food: result,
        });

    } catch (error) {
        res.status(404).json({
            success: success,
            message: message,
            food: false,
        });
    }
}
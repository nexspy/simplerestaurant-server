import express from "express";
import mongoose from "mongoose";

import FoodModel from '../models/Food.js';

export const getFoodItems = async (req, res) => {
    try {
        var success = false;
        var message = "no product found";

        const foods = await FoodModel.find();

        success = true;
        message = "loaded product successfully";
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
    try {
        var success = false;
        var message = "could not save the food item";
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
import express from "express";
import mongoose from "mongoose";

import MenuModel from '../models/Menu.js';

export const getMenu = async (req, res) => {
    var success = false;
    var message = 'no menu items found';
    try {
        const menus = await MenuModel.find().populate('foods', null,
        { status: true });

        success = true;
        message = 'found menu items';

        res.status(200).json({
            success: success,
            message: message,
            menus: menus,
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            menus: [],
        });
    }
}

export const getMenuDetail = async (req, res) => {
    var success = false;
    var message = 'no menu items found';
    try {
        const id = req.params.menuId;
        const menu = await MenuModel.find({ _id: id }).populate('foods', null,
        { status: true });

        success = true;
        message = 'found menu item';

        res.status(200).json({
            success: success,
            message: message,
            menu: menu[0],
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            menu: false,
        });
    }
}

export const createMenu = async (req, res) => {
    var success = false;
    var message = 'menu could not be created';
    try {
        const body = req.body;

        const menu = new MenuModel(body);
        menu.save();

        success = true;
        message = 'menu was created successfully';

        res.status(200).json({
            success: success,
            message: message,
            menu: menu,
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            menu: false,
        });
    }
}

export const deleteMenu = async (req, res) => {
    var success = false;
    var message = 'menu could not be deleted';
    try {
        const id = req.params.menuId;

        const menu = await MenuModel.deleteOne({
            _id: id,
        });

        if (menu.deletedCount) {
            success = true;
            message = 'menu was deleted successfully';
        } else {
            message = 'no menu found to be deleted';
        }

        res.status(200).json({
            success: success,
            message: message,
            menu: menu,
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            menu: false,
        });
    }
}

export const updateMenu = async (req, res) => {
    var success = false;
    var message = 'menu could not be update';
    try {
        const body = req.body;
        const id = req.params.menuId;

        const result = await MenuModel.updateOne(
            { _id: id },
            { $set: body }
        );

        if (result.nModified) {
            success = true;
            message = "the menu was updated";
        }

        res.status(200).json({
            success: success,
            message: message,
            menu: result,
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            menu: false,
        });
    }
}
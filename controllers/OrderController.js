import moment from 'moment';
import OrderModel from '../models/Order.js';

export const getCurrentOrders = async (req, res) => {
    var success = false;
    var message = 'no orders found';
    try {
        var start = moment().startOf('day'); // set to 12:00 am today
        var end = moment().endOf('day'); // set to 23:59 pm today

        const orders = await OrderModel.find({
            'status': true,
            'date': { $gte: start, $lt: end }
        }).sort({ 'date': -1 });

        success = true;
        message = 'found orders';

        res.status(200).json({
            success: success,
            message: message,
            orders: orders,
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            orders: [],
        });
    }
}

export const getOrders = async (req, res) => {
    var success = false;
    var message = 'no orders found';
    try {
        var filters = {};
        const startDate = (typeof req.body.startDate !== "undefined") ? req.body.startDate : null;
        const endDate = (typeof req.body.endDate !== "undefined") ? req.body.endDate : null;

        if (startDate !== null) {
            filters['date'] = { $gte: startDate, $lt: endDate };
        }

        const orders = await OrderModel.find(filters).sort({ date: -1 });

        success = true;
        message = 'found orders';

        res.status(200).json({
            success: success,
            message: message,
            orders: orders,
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            orders: [],
        });
    }
}

export const getOrder = async (req, res) => {
    var success = false;
    var message = 'no order found';
    try {
        const id = req.params.orderId;
        const order = await OrderModel.find({ _id: id });

        success = true;
        message = 'found order item';

        res.status(200).json({
            success: success,
            message: message,
            order: order[0],
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            order: [],
        });
    }
}

export const createOrder = async (req, res) => {
    var success = false;
    var message = 'order could not be created';
    try {
        const body = req.body;

        const order = new OrderModel(body);
        order.save();

        success = true;
        message = 'order was created successfully';

        res.status(200).json({
            success: success,
            message: message,
            order: order,
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            order: false,
        });
    }
}

export const deleteOrder = async (req, res) => {
    var success = false;
    var message = 'order could not be deleted';
    try {
        const id = req.params.orderId;

        const order = await OrderModel.deleteOne({
            _id: id,
        });

        if (order.deletedCount) {
            success = true;
            message = 'order was deleted successfully';
        } else {
            message = 'no order found to be deleted';
        }
        
        res.status(200).json({
            success: success,
            message: message,
            order: order,
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            order: false,
        });
    }
}

export const updateOrder = async (req, res) => {
    var success = false;
    var message = 'order could not be updated';
    try {
        const body = req.body;
        const id = req.params.orderId;

        const result = await OrderModel.updateOne(
            { _id: id },
            { $set: body }
        );

        if (result.nModified) {
            success = true;
            message = "the order was updated";
        }

        res.status(200).json({
            success: success,
            message: message,
            order: result,
        });
    } catch(error) {
        res.status(200).json({
            success: success,
            message: message,
            order: false,
        });
    }
}
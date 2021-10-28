import OrderModel from '../models/Order.js';

export const getOrders = async (req, res) => {
    var success = false;
    var message = 'no orders found';
    try {
        const orders = await OrderModel.find();

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
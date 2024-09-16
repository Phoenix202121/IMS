const Order = require('../models/order');

exports.createOrder = async (req, res) => {
  const { customerName, items } = req.body;
  const newOrder = new Order({ customerName, items });
  await newOrder.save();
  res.json(newOrder);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate('items');
  res.json(orders);
};

exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });
  res.json(updatedOrder);
};

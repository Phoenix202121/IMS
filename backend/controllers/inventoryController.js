const Inventory = require('../models/inventory');

exports.getInventory = async (req, res) => {
  const inventory = await Inventory.find();
  res.json(inventory);
};

exports.createInventory = async (req, res) => {
  const { name, quantity, price } = req.body;
  const newItem = new Inventory({ name, quantity, price });
  await newItem.save();
  res.json(newItem);
};

exports.updateInventory = async (req, res) => {
  const { id } = req.params;
  const { quantity, price } = req.body;
  const updatedItem = await Inventory.findByIdAndUpdate(id, { quantity, price }, { new: true });
  res.json(updatedItem);
};

exports.deleteInventory = async (req, res) => {
  const { id } = req.params;
  await Inventory.findByIdAndDelete(id);
  res.json({ message: 'Item deleted' });
};

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' }],
  status: { type: String, default: 'Pending' },
  deliveryDate: { type: Date },
});

module.exports = mongoose.model('Order', orderSchema);

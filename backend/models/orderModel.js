const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      email: {
        type: String,
      },
    },
    orderItems: [],
    orderTotal: {
      type: Number,
    },
    payType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);

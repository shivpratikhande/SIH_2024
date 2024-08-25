const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  recipient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    enum: ["Case Update", "System Alert", "New Message"],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  is_read: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;

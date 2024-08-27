import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateFiled: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Open", "Closed", "Pending"],
    default: "Open",
  },
  lawyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lawyer",
  },
});

const Case = mongoose.model("Case", caseSchema, "cases");

export default Case;

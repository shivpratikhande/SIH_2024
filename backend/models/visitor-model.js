import mongoose from "mongoose";
import bcrypt from "bcrypt";

const VisitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email_id: { type: String, required: true, unique: true },
  // Additional fields can be added based on the visitor's interaction with the site
});

Visitor = mongoose.model("Visitor", VisitorSchema);

export default Visitor;

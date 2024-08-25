import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UndertrialPrisonerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email_id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  prison_id: { type: String, required: true }, // ID of the prison where the prisoner is held
  offense_id: { type: mongoose.Schema.Types.ObjectId, ref: "Offense" },
  bail_applications: [
    { type: mongoose.Schema.Types.ObjectId, ref: "BailApplication" },
  ],
  imprisonment_details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Imprisonment",
  },
});

// Pre-save hook to hash the password before saving the prisoner
UndertrialPrisonerSchema.pre("save", async function (next) {
  const prisoner = this;

  // Hash the password only if it has been modified (or is new)
  if (!prisoner.isModified("password")) return next();

  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10);

    // Hash password
    const hashedPassword = await bcrypt.hash(prisoner.password, salt);

    // Override the plain password with the hashed one
    prisoner.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

// Method to compare the provided password with the hashed password
UndertrialPrisonerSchema.methods.comparePassword = async function (
  inputPassword
) {
  try {
    const isMatch = await bcrypt.compare(inputPassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

// Create the model using the schema
const UndertrialPrisoner = mongoose.model(
  "UndertrialPrisoner",
  UndertrialPrisonerSchema
);

export default UndertrialPrisoner;

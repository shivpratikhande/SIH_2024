import Undertrial from "../models/under-trail-prisoner.js";
import jwt from "jsonwebtoken";
import { ApiStatusCodes, ResponseMessages } from "../enums/app.enums.js";
import { generateToken } from "../middlewares/auth.js";
import { comparePassword } from "../utils/app.utils.js";

export const loginUndertrialService = async (email_id, password) => {
  try {
    // Find the under-trial prisoner by email_id
    const undertrial = await Undertrial.findOne({ email_id }); // Corrected the query method and object

    if (!undertrial) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "Under-trial Prisoner not found",
      };
    }

    const prisonerPassword = undertrial.password;

    // Check if the password is correct
    const isPasswordValid = comparePassword(password, prisonerPassword);
    if (!isPasswordValid) {
      return {
        status_code: ApiStatusCodes.UNAUTHORIZED,
        data: null,
        message: "Invalid password",
      };
    }

    const payload = {
      id: undertrial._id.toString(),
    };

    const token = generateToken(payload);

    return {
      status_code: ApiStatusCodes.OK,
      data: { undertrial, token },
      message: "Under-trial Prisoner logged in successfully",
    };
  } catch (err) {
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: err.message,
    };
  }
};

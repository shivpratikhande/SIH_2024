import Lawyer from "../models/lawyer-model.js";
import jwt from "jsonwebtoken";
import { ApiStatusCodes, ResponseMessages } from "../enums/app.enums.js";
import { comparePassword } from "../utils/app.utils.js";
import { generateToken } from "../middlewares/auth.js";

export const loginLawyerService = async (email_id, password) => {
  try {
    // Find the lawyer by email_id
    const lawyer = await Lawyer.findOne({ email_id });

    if (!lawyer) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "Lawyer not found",
      };
    }

    const lawyerPassword = lawyer.password;

    // Check if the password is correct
    const isPasswordValid = comparePassword(lawyerPassword, password);
    if (!isPasswordValid) {
      return {
        status_code: ApiStatusCodes.BAD_REQUEST,
        data: null,
        message: "Invalid password",
      };
    }

    const payload = {
      id: lawyer._id.toString(),
    };

    const token = generateToken(payload);

    return {
      status_code: ApiStatusCodes.OK,
      data: { lawyer, token },
      message: "Lawyer logged in successfully",
    };
  } catch (err) {
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: err.message,
    };
  }
};

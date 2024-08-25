import mongoose from "mongoose";
import Lawyer from "../models/lawyer-model.js";
import jwt from "jsonwebtoken";
import { ApiStatusCodes, ResponseMessages } from "../enums/app.enums.js";
import { comparePassword } from "../utils/app.utils.js";
import { generateToken } from "../middlewares/auth.js";
import Case from "../models/case-model.js";
import Precedent from "../models/precedents-model.js";

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

/** Service to retrieve all Lawyers */
export const getAllLawyersService = async () => {
  try {
    // Retrieve all lawyers from the database
    const lawyers = await Lawyer.find({});

    if (!lawyers || lawyers.length === 0) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "No lawyers found",
      };
    }

    return {
      status_code: ApiStatusCodes.OK,
      data: lawyers,
      message: "Lawyers retrieved successfully",
    };
  } catch (err) {
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: err.message,
    };
  }
};

/** Service to retrieve a Lawyer by ID */
export const getLawyerByIdService = async (id) => {
  try {
    // Find the lawyer by ID
    const lawyer = await Lawyer.findById(id);

    if (!lawyer) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "Lawyer not found",
      };
    }

    return {
      status_code: ApiStatusCodes.OK,
      data: lawyer,
      message: "Lawyer retrieved successfully",
    };
  } catch (err) {
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: err.message,
    };
  }
};

export const getCasesByLawyerIdService = async (lawyerId) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(lawyerId)) {
      return {
        status_code: ApiStatusCodes.BAD_REQUEST,
        data: null,
        message: "Invalid Lawyer ID format",
      };
    }

    const lawyer = await Lawyer.findById(lawyerId).populate("cases_handled");

    if (!lawyer) {
      console.log("Lawyer not found");
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "Lawyer not found",
      };
    }

    if (!lawyer.cases_handled || lawyer.cases_handled.length === 0) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "No cases found for this lawyer",
      };
    }

    return {
      status_code: ApiStatusCodes.OK,
      data: lawyer.cases_handled,
      message: "Cases retrieved successfully",
    };
  } catch (err) {
    console.error("Error fetching lawyer:", err.message);
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: "Internal server error",
    };
  }
};

// Service function to get all precedents used by a specific lawyer
export const getPrecedentsByLawyerIdService = async (lawyerId) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(lawyerId)) {
      return {
        status_code: ApiStatusCodes.BAD_REQUEST,
        data: null,
        message: "Invalid Lawyer ID format",
      };
    }

    const lawyer = await Lawyer.findById(lawyerId).populate("precedents_used");

    if (!lawyer || !lawyer.precedents_used.length) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "No precedents found for this lawyer",
      };
    }

    return {
      status_code: ApiStatusCodes.OK,
      data: lawyer.precedents_used,
      message: "Precedents retrieved successfully",
    };
  } catch (err) {
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: err.message,
    };
  }
};

// Service function to get the client meeting service //
export const getClientMeetingsService = async (lawyerId) => {
  try {
    // Find the lawyer by ID and select meetings_scheduled
    const lawyer = await Lawyer.findById(lawyerId)
      .select("meetings_scheduled")
      .exec();

    if (!lawyer) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "Lawyer not found",
      };
    }

    if (!lawyer.meetings_scheduled || lawyer.meetings_scheduled.length === 0) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "No client meetings found for this lawyer",
      };
    }

    // Transform meeting data to include only relevant details
    const meetingData = lawyer.meetings_scheduled.map((meeting) => ({
      clientId: meeting.client,
      meetingDate: meeting.meetingDate,
      location: meeting.location,
      purpose: meeting.purpose,
      notes: meeting.notes,
    }));

    return {
      status_code: ApiStatusCodes.OK,
      data: meetingData,
      message: "Client meetings retrieved successfully",
    };
  } catch (err) {
    console.error("Error fetching client meetings:", err); // Added log for errors
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: err.message,
    };
  }
};

// Service function to get-court-appearance //
export const getCourtAppearancesService = async (lawyerId) => {
  try {
    // Find the lawyer and populate the court_appearances field
    const lawyer = await Lawyer.findById(lawyerId).populate(
      "court_appearances",
      "caseId clientName location date time"
    );

    if (!lawyer || !lawyer.court_appearances.length) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "No court appearances found for this lawyer",
      };
    }

    return {
      status_code: ApiStatusCodes.OK,
      data: lawyer.court_appearances,
      message: "Court appearances retrieved successfully",
    };
  } catch (err) {
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: err.message,
    };
  }
};

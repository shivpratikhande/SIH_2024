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

/** Service function to get all under-trial prisoners */
export const getAllUnderTrialPrisonersService = async () => {
  try {
    const prisoners = await Undertrial.find({});

    if (!prisoners || prisoners.length === 0) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "No under-trial prisoners found",
      };
    }

    return {
      status_code: ApiStatusCodes.OK,
      data: prisoners,
      message: "All under-trial prisoners retrieved successfully",
    };
  } catch (err) {
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: err.message,
    };
  }
};

// Service function to get all details of Prisoner by Name //
export const getPrisonerByNameService = async (_id) => {
  try {
    const prisoner = await Undertrial.findById({ _id: _id });

    if (!prisoner) {
      console.log("No prisoner found");
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "Prisoner not found",
      };
    }

    return {
      status_code: ApiStatusCodes.OK,
      data: prisoner,
      message: "Prisoner retrieved successfully",
    };
  } catch (err) {
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: err.message,
    };
  }
};

// Service function to get the past records of Prisoner //
export const getPastRecordsService = async (prisonerId) => {
  try {
    const prisoner = await Undertrial.findById(prisonerId)
      .select("past_records")
      .populate({
        path: "past_records.case_id",
        select: "case_number case_status", // Adjust the fields you want to retrieve
      })
      .exec();

    if (!prisoner) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        data: null,
        message: "Prisoner not found",
      };
    }

    return {
      status_code: ApiStatusCodes.OK,
      data: prisoner.past_records,
      message: "Past records retrieved successfully",
    };
  } catch (error) {
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      message: error.message,
    };
  }
};

// Service function to get the details of the Family Background Of Prisoner //
export const getPrisonerFamilyBackgroundService = async (prisonerId) => {
  console.log(prisonerId);
  try {
    const prisoner = await Undertrial.findById(prisonerId).select(
      "family_background"
    );
    console.log(prisoner);

    if (!prisoner) {
      return {
        status_code: ApiStatusCodes.DATA_NOT_FOUND,
        message: "Prisoner not found",
      };
    }

    return {
      status_code: ApiStatusCodes.OK,
      data: prisoner.family_background,
      message: "Family background retrieved successfully",
    };
  } catch (err) {
    return {
      status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
      message: err.message || "An unexpected error occurred",
    };
  }
};

// Service function for the Prisoner to uploads the documents
export const uploadDocumentService = async (file, prisonerId) => {
  try {
    if (!file) {
      return {
        statusCode: 400,
        success: false,
        message: "No file uploaded",
      };
    }

    // Find the prisoner by ID and push the document details
    await Undertrial.findByIdAndUpdate(
      prisonerId,
      {
        $push: {
          documents: {
            fileName: file.filename,
            filePath: file.path,
            uploadDate: new Date(),
          },
        },
      },
      { new: true }
    );

    return {
      statusCode: 200,
      success: true,
      message: "File uploaded and saved successfully",
      file: file,
    };
  } catch (error) {
    return {
      statusCode: 500,
      success: false,
      message: "Server Error",
      error: error.message,
    };
  }
};

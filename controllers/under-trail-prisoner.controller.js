import {
  loginUndertrialService,
  getAllUnderTrialPrisonersService,
  getPrisonerByNameService,
} from "../services/under-trail-prisoner.service.js";
import { responseFormatter } from "../utils/app.utils.js";
import { ApiStatusCodes, ResponseMessages } from "../enums/app.enums.js";

/** Function to login Under-trial Prisoner */
export const loginUndertrialController = async (req, res) => {
  try {
    const { email_id, password } = req.body;

    if (!email_id || !password) {
      res.json(
        responseFormatter(
          ApiStatusCodes.BAD_REQUEST,
          false,
          null,
          "Email ID or Password not provided"
        )
      );
      return;
    }

    const undertrialLoginResponse = await loginUndertrialService(
      email_id,
      password
    );

    switch (undertrialLoginResponse.status_code) {
      case ApiStatusCodes.OK:
        res.json(
          responseFormatter(
            ApiStatusCodes.OK,
            true,
            undertrialLoginResponse.data,
            "Under-trial Prisoner logged in successfully"
          )
        );
        break;
      case ApiStatusCodes.DATA_NOT_FOUND:
        res.json(
          responseFormatter(
            ApiStatusCodes.DATA_NOT_FOUND,
            false,
            null,
            "Under-trial Prisoner not found"
          )
        );
        break;
      case ApiStatusCodes.UNAUTHORIZED:
        res.json(
          responseFormatter(
            ApiStatusCodes.UNAUTHORIZED,
            false,
            null,
            "Invalid credentials"
          )
        );
        break;
      default:
        res.json(
          responseFormatter(
            ApiStatusCodes.INTERNAL_SERVER_ERROR,
            false,
            null,
            "Internal server error"
          )
        );
    }
  } catch (error) {
    res.json(
      responseFormatter(
        ApiStatusCodes.INTERNAL_SERVER_ERROR,
        false,
        null,
        error.message
      )
    );
  }
};

export const getAllUnderTrialPrisonersController = async (req, res) => {
  try {
    const result = await getAllUnderTrialPrisonersService();

    switch (result.status_code) {
      case ApiStatusCodes.OK:
        return res
          .status(result.status_code)
          .json(
            responseFormatter(
              ApiStatusCodes.OK,
              true,
              result.data,
              result.message
            )
          );
      case ApiStatusCodes.DATA_NOT_FOUND:
        return res
          .status(result.status_code)
          .json(
            responseFormatter(
              ApiStatusCodes.DATA_NOT_FOUND,
              false,
              null,
              result.message
            )
          );
      default:
        return res
          .status(ApiStatusCodes.INTERNAL_SERVER_ERROR)
          .json(
            responseFormatter(
              ApiStatusCodes.INTERNAL_SERVER_ERROR,
              false,
              null,
              result.message || "An unexpected error occurred"
            )
          );
    }
  } catch (err) {
    console.error("Controller error:", err); // Log the error
    return res
      .status(ApiStatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        responseFormatter(
          ApiStatusCodes.INTERNAL_SERVER_ERROR,
          false,
          null,
          err.message || "An unexpected error occurred"
        )
      );
  }
};

export const getPrisonerByNameController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res
        .status(ApiStatusCodes.BAD_REQUEST)
        .json(
          responseFormatter(
            ApiStatusCodes.BAD_REQUEST,
            false,
            null,
            "Prisoner name not provided"
          )
        );
    }

    const result = await getPrisonerByNameService(name);

    switch (result.status_code) {
      case ApiStatusCodes.OK:
        return res
          .status(result.status_code)
          .json(
            responseFormatter(
              ApiStatusCodes.OK,
              true,
              result.data,
              result.message
            )
          );
      case ApiStatusCodes.DATA_NOT_FOUND:
        return res
          .status(result.status_code)
          .json(
            responseFormatter(
              ApiStatusCodes.DATA_NOT_FOUND,
              false,
              null,
              result.message
            )
          );
      default:
        return res
          .status(ApiStatusCodes.INTERNAL_SERVER_ERROR)
          .json(
            responseFormatter(
              ApiStatusCodes.INTERNAL_SERVER_ERROR,
              false,
              null,
              result.message || "An unexpected error occurred"
            )
          );
    }
  } catch (err) {
    return res
      .status(ApiStatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        responseFormatter(
          ApiStatusCodes.INTERNAL_SERVER_ERROR,
          false,
          null,
          err.message || "An unexpected error occurred"
        )
      );
  }
};

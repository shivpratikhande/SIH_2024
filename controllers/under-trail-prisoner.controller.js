import {
  loginUndertrialService,
  getAllUnderTrialPrisonersService,
  getPrisonerByNameService,
  getPastRecordsService,
  getPrisonerFamilyBackgroundService,
  uploadDocumentService,
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

// Function to get past records of Prisoner //

export const getPastRecordsController = async (req, res) => {
  try {
    const { prisonerId } = req.body;
    //console.log(prisonerId);

    if (!prisonerId) {
      return res
        .status(ApiStatusCodes.BAD_REQUEST)
        .json(
          responseFormatter(
            ApiStatusCodes.BAD_REQUEST,
            false,
            null,
            "Prisoner ID not provided"
          )
        );
    }

    const result = await getPastRecordsService(prisonerId);

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

// Function to get the details of the Family background of Prisoner //

export const getPrisonerFamilyBackgroundController = async (req, res) => {
  try {
    const { prisonerId } = req.body;
    //console.log(prisonerId);

    if (!prisonerId) {
      return res
        .status(ApiStatusCodes.BAD_REQUEST)
        .json(
          responseFormatter(
            ApiStatusCodes.BAD_REQUEST,
            false,
            null,
            "Prisoner ID not provided"
          )
        );
    }

    const result = await getPrisonerFamilyBackgroundService(prisonerId);

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

// Function to upload the Documents specified by the lawyer  //
export const uploadDocumentController = async (req, res) => {
  const { prisonerId } = req.body;
  console.log(prisonerId);
  const file = req.file;
  console.log(file);

  const response = await uploadDocumentService(file, prisonerId);

  switch (response.statusCode) {
    case 200:
      res.status(200).json({
        success: response.success,
        message: response.message,
        file: response.file,
      });
      break;
    case 400:
      res.status(400).json({
        success: response.success,
        message: response.message,
      });
      break;
    case 500:
    default:
      res.status(500).json({
        success: response.success,
        message: response.message,
        error: response.error,
      });
      break;
  }
};

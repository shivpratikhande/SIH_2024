import { loginLawyerService } from "../services/lawyer.service.js";
import { responseFormatter } from "../utils/app.utils.js";
import { ApiStatusCodes, ResponseMessages } from "../enums/app.enums.js";

/** Function to login Lawyer */
export const loginLawyerController = async (req, res) => {
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

    const lawyerLoginResponse = await loginLawyerService(email_id, password);

    switch (lawyerLoginResponse.status_code) {
      case ApiStatusCodes.OK:
        res.json(
          responseFormatter(
            ApiStatusCodes.OK,
            true,
            lawyerLoginResponse.data,
            "Lawyer logged in successfully"
          )
        );
        break;
      case ApiStatusCodes.DATA_NOT_FOUND:
        res.json(
          responseFormatter(
            ApiStatusCodes.DATA_NOT_FOUND,
            false,
            null,
            "Lawyer not found"
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

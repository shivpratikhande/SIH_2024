import { loginUndertrialService } from "../services/under-trail-prisoner.service.js";
import { responseFormatter } from "../utils/app.utils.js";
import { ApiStatusCodes, ResponseMessages } from "../enums/app.enums.js";

/** Function to login Under-trial Prisoner */
export const loginUndertrialController = async (req, res) => {
  try {
    const { email_id, password } = req.body;
    console.log(email_id, password);

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

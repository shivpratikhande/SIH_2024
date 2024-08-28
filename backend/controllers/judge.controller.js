// import { loginJudgeService } from "../services/judge.service.js";
// import { responseFormatter } from "../utils/app.utils.js";
// import { ApiStatusCodes, ResponseMessages } from "../enums/app.enums.js";

// /** Function to login Judge */
// export const loginJudgeController = async (req, res) => {
//   try {
//     const { email_id, password } = req.body;

//     if (!email_id || !password) {
//       res.json(
//         responseFormatter(
//           ApiStatusCodes.BAD_REQUEST,
//           false,
//           null,
//           "Email ID or Password not provided"
//         )
//       );
//       return;
//     }

//     const judgeLoginResponse = await loginJudgeService(email_id, password);

//     switch (judgeLoginResponse.status_code) {
//       case ApiStatusCodes.OK:
//         res.json(
//           responseFormatter(
//             ApiStatusCodes.OK,
//             true,
//             judgeLoginResponse.data,
//             "Judge logged in successfully"
//           )
//         );
//         break;
//       case ApiStatusCodes.DATA_NOT_FOUND:
//         res.json(
//           responseFormatter(
//             ApiStatusCodes.DATA_NOT_FOUND,
//             false,
//             null,
//             "Judge not found"
//           )
//         );
//         break;
//       case ApiStatusCodes.UNAUTHORIZED:
//         res.json(
//           responseFormatter(
//             ApiStatusCodes.UNAUTHORIZED,
//             false,
//             null,
//             "Invalid credentials"
//           )
//         );
//         break;
//       default:
//         res.json(
//           responseFormatter(
//             ApiStatusCodes.INTERNAL_SERVER_ERROR,
//             false,
//             null,
//             "Internal server error"
//           )
//         );
//     }
//   } catch (error) {
//     res.json(
//       responseFormatter(
//         ApiStatusCodes.INTERNAL_SERVER_ERROR,
//         false,
//         null,
//         error.message
//       )
//     );
//   }
// };



import { loginJudgeService } from "../services/judge.service.js";
import { responseFormatter } from "../utils/app.utils.js";
import { ApiStatusCodes, ResponseMessages } from "../enums/app.enums.js";
import path from 'path';
import fs from 'fs'; 
import { spawn } from 'child_process';
const __dirname = path.resolve();


export const loginJudgeController = async (req, res) => {
  try {
    const { email_id, password } = req.body;
    console.log(email_id + password);
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

    const judgeLoginResponse = await loginJudgeService(email_id, password);

    if (judgeLoginResponse.status_code !== ApiStatusCodes.OK) {
      switch (judgeLoginResponse.status_code) {
        case ApiStatusCodes.DATA_NOT_FOUND:
          res.json(
            responseFormatter(
              ApiStatusCodes.DATA_NOT_FOUND,
              false,
              null,
              "Judge not found"
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
      return;
    }



    const batchFilePath = path.join(__dirname, '..', 'FaceRecognition', 'runPythonScript.bat');

    const executePythonScript = () => {
      return new Promise((resolve, reject) => {
          const pythonProcess = spawn('cmd.exe', ['/c', batchFilePath]);

          pythonProcess.stdout.on('data', (data) => {
              console.log(`stdout: ${data.toString()}`);
          });

          pythonProcess.stderr.on('data', (data) => {
              console.error(`stderr: ${data.toString()}`);
          });

          pythonProcess.on('close', (code) => {
              console.log(`Python process exited with code ${code}`);
              if (code === 0) {
                  resolve(); 
              } else {
                  reject(new Error(`Python script failed with exit code ${code}`));
              }
          });
      });
  };

  await executePythonScript();


  const loginStatusPath = path.join(__dirname, '..', 'FaceRecognition', 'face-attendance-system', 'login_status.txt' );

  const readLoginStatus = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(loginStatusPath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};


let loginStatus;
    try {
      loginStatus = await readLoginStatus();
      console.log('Current login status:', loginStatus);
    } catch (error) {
      console.error('Error reading login status:', error);
      res.json(
        responseFormatter(
          ApiStatusCodes.INTERNAL_SERVER_ERROR,
          false,
          null,
          "Error reading login status"
        )
      );
      return;
    }
    if (loginStatus === `Logged in as ${email_id}`) {
      res.json(
        responseFormatter(
          ApiStatusCodes.OK,
          true,
          judgeLoginResponse.data,
          "Judge logged in successfully"
        )
      );
    } else {
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

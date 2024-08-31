import Visitor from "../models/visitor-model";
import jwt from "jsonwebtoken";
import { ApiStatusCodes, ResponseMessages } from "../enums/app.enums.js";
import { comparePassword } from "../utils/app.utils.js";
import { generateToken } from "../middlewares/auth.js";
export const visitorLoginService = async (req,res) => {
    try {
      // Find the User by email_id
      const {email_id, password}=req.body
      const User = await Visitor.findOne({ email_id });
  
      if (!User) {
        res.send( {
          status_code: ApiStatusCodes.DATA_NOT_FOUND,
          data: null,
          message: "User not found",
        });
      }
  
      const UserPassword = User.password;
  
      // Check if the password is correct
      const isPasswordValid = comparePassword(UserPassword, password);
      if (!isPasswordValid) {
        res.send( {
          status_code: ApiStatusCodes.BAD_REQUEST,
          data: null,
          message: "Invalid password",
        });
      }
  
      const payload = {
        id: User._id.toString(),
      };
  
      const token = generateToken(payload);
  
      return {
        status_code: ApiStatusCodes.OK,
        data: { User, token },
        message: "User logged in successfully",
      };
    } catch (err) {
      res.send ({
        status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
        data: null,
        message: err.message,
      });
    }
  };

  export const visitorSignupService=async(req, res)=>{
    const {email_id, password, name}=req.body
    const user=await Visitor.findOne({ email_id })
    if(user){
        return({
            status_code: ApiStatusCodes.USER_EXISTS,
          data: null,
          message: "User already exists",
        })
    }
    const visitor=new Visitor({name, email, password, role:"visitor"})
    await visitor.save().then(()=>{
        res.send( {
        status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
        data: null,
        message: err.message,
      });
    }).catch(err=>res.send({
        status_code: ApiStatusCodes.INTERNAL_SERVER_ERROR,
        data: null,
        message: err,
    }))
  }
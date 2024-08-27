// MODULES //
import { Router } from "express";

// CONTROLLERS //
import * as UsersController from "../controllers/users.controller";

// Middlewares //
import { jwtAuthMiddleware } from "../middlewares/middleware";

// Define Router
const router = Router();

/** POST - Route to login user or create new user - login  */
router.post("/login", UsersController.uaLoginUser);

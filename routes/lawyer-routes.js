// MODULES //
import { Router } from "express";

// CONTROLLERS //
import * as LawyersController from "../controllers/lawyers.controller.js";

// Middlewares //
import { jwtAuthMiddleware } from "../middlewares/middleware.js";

// Define Router
const router = Router();

/** POST - Route to login user or create new user - users/ua-login  */
router.post("/login", LawyersController.loginLawyerController);

export default router;

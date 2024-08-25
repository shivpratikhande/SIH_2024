// MODULES //
import { Router } from "express";

// CONTROLLERS //
import * as UnderTrailPrisonerController from "../controllers/under-trail-prisoner.controller.js";

// Middlewares //
import { jwtAuthMiddleware } from "../middlewares/middleware.js";

// Define Router
const router = Router();

/** POST - Route to login user or create new user - users/ua-login  */
router.post("/login", UnderTrailPrisonerController.loginUndertrialController);

export default router;

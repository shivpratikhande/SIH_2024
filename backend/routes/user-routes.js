// MODULES //
import { Router } from "express";

// CONTROLLERS //
import * as UsersController from "../controllers/usersController.js";

// Middlewares //
import { jwtAuthMiddleware } from "../middlewares/middleware.js";

// Define Router
const router = Router();

/** POST - Route to login user or create new user - login  */
router.post("/login", UsersController.visitorLoginService);
router.post("/signup", UsersController.visitorSignupService);
export default router;
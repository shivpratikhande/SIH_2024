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

// GET Route to get all the data of Under-Trail-Prisoner
router.get(
  "/getAllPrisonerDetails",
  UnderTrailPrisonerController.getAllUnderTrialPrisonersController
);

// GET Route to get all the detail of Prisoner by Name
router.post(
  "/getPrisonerDetailsByName",
  UnderTrailPrisonerController.getPrisonerByNameController
);

export default router;

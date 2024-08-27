// MODULES //
import { Router } from "express";

// CONTROLLERS //
import * as LawyersController from "../controllers/lawyers.controller.js";

// Middlewares //
import { jwtAuthMiddleware } from "../middlewares/middleware.js";

// Define Router
const router = Router();

/** POST - Route to login lawyer or create new lawyer - users/ua-login  */
router.post("/login", LawyersController.loginLawyerController);

// GET - Routes to get the details of all the lawyers //
router.get(
  "/getAll",
  jwtAuthMiddleware,
  LawyersController.getAllLawyersController
);

// GET - Routes to get the details of any specific lawyer
router.get("/", jwtAuthMiddleware, LawyersController.getLawyerByIdController);

// GET - Retrieve all cases handled by a specific lawyer
router.post(
  "/cases",
  jwtAuthMiddleware,
  LawyersController.getCasesByLawyerIdController
);

// GET - Retrieve all precedents used by a specific lawyer
router.post(
  "/precedents",
  jwtAuthMiddleware,
  LawyersController.getPrecedentsByLawyerIdController
);

// GET - Retrieve all client meetings of a individual lawyer
router.post("/getAllMeetings", LawyersController.getClientMeetingsController);

export default router;

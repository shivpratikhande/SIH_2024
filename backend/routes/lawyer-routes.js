import { Router } from "express";

import * as LawyersController from "../controllers/lawyers.controller.js";

import { jwtAuthMiddleware } from "../middlewares/middleware.js";

const router = Router();

router.post("/login", LawyersController.loginLawyerController);

router.get(
  "/getAll",
  jwtAuthMiddleware,
  LawyersController.getAllLawyersController
);

router.get("/", jwtAuthMiddleware, LawyersController.getLawyerByIdController);

router.post(
  "/cases",
  jwtAuthMiddleware,
  LawyersController.getCasesByLawyerIdController
);

router.post(
  "/precedents",
  jwtAuthMiddleware,
  LawyersController.getPrecedentsByLawyerIdController
);

router.post("/getAllMeetings", LawyersController.getClientMeetingsController);

export default router;

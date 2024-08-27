import express from "express";
import db from "./db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multer from "multer";

//import userRoutes from "./routes/user-routes";
import prisonerRoutes from "./routes/under-trail-prisoner-routes.js";
import judgeRoutes from "./routes/judge-routes.js";
import lawyerRoutes from "./routes/lawyer-routes.js";

dotenv.config();
const app = express();

app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Use the routers
//app.use("/user", userRoutes);
app.use("/judge", judgeRoutes);
app.use("/lawyer", lawyerRoutes);
app.use("/prisoner", prisonerRoutes);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});

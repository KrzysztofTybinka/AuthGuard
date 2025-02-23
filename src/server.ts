import express from "express";
import bodyParser from "body-parser";
import registerRoutes from "./http/routes";

const app = express();
app.use(bodyParser.json());

// Register Routes
app.use("/api", registerRoutes);

export default app;
import { Router } from "express"
import HealthCheckController from "../controllers/healthcheck.controller.js";


const router = Router();

router.get("/healthcheck", HealthCheckController.healthCheck);


export default router;

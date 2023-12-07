import { Router } from "express";
import {fortuneTeller } from "../controllers/fortuneTellerController.js";


const router = Router();

router.get("/", fortuneTeller );



export default router;
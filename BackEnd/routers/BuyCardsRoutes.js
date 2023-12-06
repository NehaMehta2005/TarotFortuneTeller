import { Router } from "express";
 import {
createOrder, deleteOrder } from "../controllers/buycardController.js";


const router = Router();

router.post("/createOrder", createOrder);
router.delete("/deleteOrder", deleteOrder);


export default router;
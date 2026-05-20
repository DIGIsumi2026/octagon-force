import { Router } from "express";
import { createContactRequest } from "../controllers/contact.controller.js";

const router = Router();

router.post("/", createContactRequest);

export default router;

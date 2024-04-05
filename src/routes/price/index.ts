import express from "express";
import { PriceController } from "../../controllers/price";

export const routerPrice = express.Router();

routerPrice.get("/price/:user_id/:product_name", PriceController.getAll);

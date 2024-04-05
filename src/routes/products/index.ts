import express from "express";
import { ProductsController } from "../../controllers/products";

export const routerProducts = express.Router();

routerProducts.get("/products", ProductsController.getAll);
routerProducts.get("/products/:id", ProductsController.getById);
routerProducts.post("/products", ProductsController.create);
routerProducts.put("/products/:id", ProductsController.update);
routerProducts.delete("/products/:id", ProductsController.delete);


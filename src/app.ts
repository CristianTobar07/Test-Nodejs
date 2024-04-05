import express from "express";
import dotenv from "dotenv";
import cors from "cors";
require("dotenv").config();
import { routerProducts } from "./routes/products";
import { conectarDB } from "./config/connect";
import { routerPrice } from "./routes/price";

dotenv.config();

const app = express();
app.use(cors());
conectarDB();
const PORT = process.env.PORT;

app.use(routerProducts);
app.use(routerPrice);

app.listen(PORT, () => {
  console.log(`Listen port: ${PORT}`);
});

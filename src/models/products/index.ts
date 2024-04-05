import mongoose, { Schema, Document } from "mongoose";

// Definir una interfaz para representar la estructura de un usuario
interface ProductsType extends Document {
  name: string;
  price: number;
  basePrice: number;
  specialPrice: number;
  inStock: number;
}

// Definir el esquema del usuario
const productsSchema: Schema<ProductsType> = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, unique: true },
  basePrice: { type: Number, required: true, unique: true },
  specialPrice: { type: Number, required: true, unique: true },
  inStock: { type: Number, required: true },
});

// Definir el modelo de usuario basado en el esquema
const productsModel = mongoose.model<ProductsType>("Products", productsSchema);

export { productsModel, productsSchema };

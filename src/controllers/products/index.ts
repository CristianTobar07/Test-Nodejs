import { NextFunction, Response, Request } from "express";
import { productsModel } from "../../models/products";

export class ProductsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await productsModel.find({});
      res.status(200).json({ data: data });
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const uid = req.params.id;
      const data = await productsModel.findById(uid);
      if (data === null) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.status(200).json({ data });
      }
    } catch (err) {
      next(err);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const product = await productsModel.create(body);
      res.status(201).json({ message: "Product created", data: product });
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const uid = req.params.id;
      const body = req.body;
      const data = await productsModel.findByIdAndUpdate(uid, body);

      if (data === null) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.status(201).json({ message: "Updated!", data });
      }
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const uid = req.params.id;

      const data = await productsModel.findByIdAndDelete(uid);
      console.log({ data });
      if (data === null) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.status(201).json({ message: "Delete product", data });
      }
    } catch (err) {
      next(err);
    }
  }
}

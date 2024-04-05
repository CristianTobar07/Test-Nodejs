import { NextFunction, Response, Request } from "express";
import { productsModel } from "../../models/products";
import { RequestGetPrieceByUser } from "../../interfaces/prices";

export class PriceController {
  static async getAll(
    req: Request<RequestGetPrieceByUser>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { user_id, product_name } = req.params;

      //Para obtener los precios especiales de un usuario en especifico,
      // es necesario el documento de ususarios y su relación con las marcas,
      // con el fin de hacer un match y devolver una respuesta dependianto de
      //dicho ususario. Como no es proveida dicha ruta en las especificaciones,
      //se envia la marca coincidente, despues se filtra si tiene o no un precio especial

      const data = await productsModel.find({});
      const newDataSpecialPrice = data.find(
        (product) => product.name === product_name
      );

      const dataBrand = newDataSpecialPrice
        ? {
            name: newDataSpecialPrice.name,
            price: newDataSpecialPrice.specialPrice
              ? newDataSpecialPrice.specialPrice
              : newDataSpecialPrice.basePrice,
          }
        : null;

      res.status(200).json({ data: dataBrand });
    } catch (err) {
      next(err);
    }
  }
}

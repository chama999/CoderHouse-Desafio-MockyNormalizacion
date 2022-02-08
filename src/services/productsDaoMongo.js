import ContenedorMongoDb from "../server/db.js"
import productModel from "../models/productSchema.js"

const productsSchema = productModel.productSchema

class ProductsDaoMongo extends ContenedorMongoDb {

    constructor() {
        super('products', productsSchema)
    }
}

export default ProductsDaoMongo
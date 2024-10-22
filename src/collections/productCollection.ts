import { ObjectId } from "mongodb";
import { Product } from "../models/product";
import { getDb } from "./config";




const collectionName = 'product';
export const productCollection = {

    getProducts: async (): Promise<Product[]> => {
        const database = await getDb();
        const products = await database.collection(collectionName).find().toArray();
        return products as unknown as Product[];
    },


    getProductById: async (id: string): Promise<Product> => {
        const database = await getDb();
        const product = await database.collection(collectionName).findOne({ "_id": new ObjectId(id) });
        return product as unknown as Product;
    },

    insertProduct: async (product: Product) => {
        const database = await getDb();
        const { insertedId } = await database.collection(collectionName).insertOne(product);
        return insertedId;
    },

    updateProduct: async (id: string, setProduct: Product) => {
        const database = await getDb();
        return await database.collection(collectionName).updateOne({ "_id": new ObjectId(id) }, { $set: setProduct })
    },

    deleteProduct: async (id: string) => {
        const database = await getDb();
        return await database.collection(collectionName).deleteOne({ "_id": new ObjectId(id) })
    }

}
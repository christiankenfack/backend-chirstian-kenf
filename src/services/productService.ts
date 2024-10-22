import { update } from "lodash";
import { productCollection } from "../collections/productCollection";
import { Product } from "../models/product";
import { logger } from "../winston";

export const productService = {


    getProduct: async (): Promise<Product[]> => {
        try {
            return await productCollection.getProducts();
        } catch (error: any) {
            logger.error(`failed to get adresses \n${error.message}\n${error.stack}`);
            return error;
        }
    },

    getProductById: async (id: string): Promise<Product> => {
        try {
            return await productCollection.getProductById(id);
        } catch (error: any) {
            logger.error(`failed to get adresses \n${error.message}\n${error.stack}`);
            return error;
        }
    },


    insertProduct: async (product: Product): Promise<any> => {
        try {
            return await productCollection.insertProduct(product);
        } catch (error: any) {
            logger.error(`failed to get adresses \n${error.message}\n${error.stack}`);
            return error;
        }
    },

    updateProduct: async (id: string, setProduct: Product): Promise<any> => {
        try {
            return await productCollection.updateProduct(id, setProduct);
        } catch (error: any) {
            logger.error(`failed to get adresses \n${error.message}\n${error.stack}`);
            return error;
        }
    },

    deleteProduct: async (id: string): Promise<any> => {

        try {
            return await productCollection.deleteProduct(id);
        } catch (error: any) {
            logger.error(`failed to get adresses \n${error.message}\n${error.stack}`);
            return error;
        }
    }



}
import { Request, Response } from 'express';
import { productService } from '../services/productService';

export const productController = {
    init: (app: any): void => {

        app.get('/products', async (req: Request, res: Response): Promise<any> => {
            const data: any = await productService.getProduct();
            res.status(200).json(data);
        }),


            app.get('/products/:id', async (req: Request, res: Response): Promise<any> => {
                const { id } = req.params;
                const data: any = await productService.getProductById(id);
                res.status(200).json(data);
            }),

            app.post('/product', async (req: Request, res: Response): Promise<any> => {
                const product = req.body;
                const data: any = await productService.insertProduct(product);
                res.status(200).json(data);
            }),

            app.put('/products/:id', async (req: Request, res: Response): Promise<any> => {
                const { id } = req.params;
                const updatedProduct = req.body;
                const data: any = await productService.updateProduct(id, updatedProduct);
                res.status(200).json(data);
            }),

            app.delete('/products/:id', async (req: Request, res: Response): Promise<any> => {
                const { id } = req.params;
                const data: any = await productService.deleteProduct(id);
                res.status(200).json(data);
            })

    }
}
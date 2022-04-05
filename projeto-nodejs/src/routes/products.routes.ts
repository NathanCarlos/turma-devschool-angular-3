import { Router, Request, Response } from 'express';
import { Product } from '../models/product.model';

const router = Router();

const products: Array<Product> = [
    {
        id: 1,
        description: 'Notebook S51',
        img: 'https://images.samsung.com/is/image/samsung/br-notebook-style-s51-np730xbe-kp1br-np730xbe-kp1br-fronttitanumsilver-185313138?$720_576_PNG$',
        price: 5000,
        quantity: 5
    },
    {
        id: 2,
        description: 'Notebook Samsung Book E30 Intel Core i3 4GB 1TB - 15,” Full HD Windows 10',
        img: 'https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-book-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/135258300/44bf629ad1472f3a86f5ae8b55ed0672.jpg',
        price: 3500,
        quantity: 3
    },
    {
        id: 3,
        description: 'Notebook Acer Aspire 5 A514-53-59QJ Intel Core I5 8GB 256GB SSD 14 Windows 10',
        img: 'https://acerstore.vteximg.com.br/arquivos/ids/157506-760-760/A514-53-54_SSD_01.jpg?v=637396805695270000',
        price: 4000,
        quantity: 2
    },
    {
        id: 4,
        description: 'Notebook Samsung Book E30 15.6" Intel® Core™ i3-10110U 4GB/1TB Windows 10 Home',
        img: 'https://d3bkgvrq5dqryp.cloudfront.net/Custom/Content/Products/34/17/3417_product-00079815_m39_637400210574011388',
        price: 3000,
        quantity: 0
    },
    {
        id: 5,
        description: 'Notebook ASUS VivoBook X543UA-GQ3157T Cinza Escuro',
        img: 'https://www.lojaasus.com.br/media/catalog/product/cache/e62f984c1b34771579d59f0076d196f0/0/0/00asus_laptop_x543_cinza_escuro_13_1_8.png',
        price: 3350,
        quantity: 2
    }
];

router.get('/all', (req: Request, res: Response) => {
    res.send(products);
});

router.post('/create', (req: Request, res: Response) => {
    const product = req.body;
    product.id = (products[(products.length - 1)].id + 1);
    products.push(product);
    res.status(201).send({ message: 'Produto criado com sucesso!' });

});

router.put('/update/:id', (req: Request, res: Response) => {
    const product = req.body;
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    if(productIndex === -1) res.status(404).send({ message: 'Produto não encontrado para fazer atualização!' });
    products[productIndex] = product;
    res.status(200).send({ message: 'Produto atualizado com sucesso!' });
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((product) => product.id === id);
    if(productIndex === -1) res.status(404).send({ message: 'Produto não encontrado para fazer a remoção!' });
    products.splice(productIndex, 1);
    res.status(200).send({ message: 'Produto excluído com sucesso!' });
});

export default router;
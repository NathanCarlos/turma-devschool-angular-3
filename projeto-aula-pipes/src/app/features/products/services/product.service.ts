import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product> = [
    {
        id: 1,
        description: 'Notebook S51',
        img: 'https://images.samsung.com/is/image/samsung/br-notebook-style-s51-np730xbe-kp1br-np730xbe-kp1br-fronttitanumsilver-185313138?$720_576_PNG$',
        price: 5000,
        quantity: 5,
        inclusionDate: new Date()
    },
    {
        id: 2,
        description: 'Notebook Samsung Book E30 Intel Core i3 4GB 1TB - 15,6” Full HD Windows 10',
        img: 'https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-book-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/135258300/44bf629ad1472f3a86f5ae8b55ed0672.jpg',
        price: 3500,
        quantity: 3,
        inclusionDate: new Date()
    },
    {
        id: 3,
        description: 'Notebook Acer Aspire 5 A514-53-59QJ Intel Core I5 8GB 256GB SSD 14 Windows 10',
        img: 'https://acerstore.vteximg.com.br/arquivos/ids/157506-760-760/A514-53-54_SSD_01.jpg?v=637396805695270000',
        price: 4000,
        quantity: 2,
        inclusionDate: new Date()
    },
    {
        id: 4,
        description: 'Notebook Samsung Book E30 15.6" Intel® Core™ i3-10110U 4GB/1TB Windows 10 Home',
        img: 'https://d3bkgvrq5dqryp.cloudfront.net/Custom/Content/Products/34/17/3417_product-00079815_m39_637400210574011388',
        price: 3000,
        quantity: 0,
        inclusionDate: new Date()
    },
    {
        id: 5,
        description: 'Notebook ASUS VivoBook X543UA-GQ3157T Cinza Escuro',
        img: 'https://www.lojaasus.com.br/media/catalog/product/cache/e62f984c1b34771579d59f0076d196f0/0/0/00asus_laptop_x543_cinza_escuro_13_1_8.png',
        price: 3350,
        quantity: 2,
        inclusionDate: new Date()
    },
    {
        id: 6,
        description: 'Notebook Positivo Duo C464C, Intel® Celeron® Dual Core N3350',
        img: 'https://d1kvbg99uxpcu.cloudfront.net/Custom/Content/Products/10/70/1070610_notebook-positivo-duo-c464c-intel-celeron-dual-core-n3350-4gb-ram-armazenamento-64gb-e-mmc-fhd-12-cinza_s1_637353333161159413.jpg',
        price: 5000,
        quantity: 3,
        inclusionDate: new Date()
    },
    {
        id: 7,
        description: 'Notebook 2 em 1 Dell Inspiron 5406-M30S 14” Full HD Touch 11ª',
        img: 'https://a-static.mlcdn.com.br/618x463/notebook-dell-inspiron-i15-3583-m3xp-8a-geracao-intel-core-i5-8gb-1tb-15-6-windows-10-preto-mcafee/dell/ci3583w111brw/6845b887836c3a7afee1cc2f7665d175.jpg',
        price: 5000,
        quantity: 8,
        inclusionDate: new Date()
    },
    {
        id: 8,
        description: 'Docooler L350 Fones de Ouvido Sem Fio',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51EPZQncIvL._AC_SY450_.jpg',
        price: 160,
        quantity: 7,
        inclusionDate: new Date()
    },
    {
        id: 9,
        description: 'JBL TUNE 500BT',
        img: 'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1449667479',
        price: 300,
        quantity: 4,
        inclusionDate: new Date()
    },
    {
        id: 10,
        description: 'Fone de Ouvido Estéreo Bluetooth W820BT Vermelho - EDIFIER',
        img: 'https://www.kalifa.com.br/produto/5037/imagem/3/0/fone-de-ouvido-estereo-bluetooth-w820bt-vermelho-edifier.jpg',
        price: 400,
        quantity: 9,
        inclusionDate: new Date()
    }
  ];

  constructor() { }

  getAll() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((product) => product.id == id);
  }

  getProductByDescription(description: string) {
    return this.products.filter(
      (product) => product.description.toUpperCase().search(description.toUpperCase()) > -1);
  }

  removeById(id: number) {
    const productIndex = this.products.findIndex((product) => product.id === id);
    return this.products.splice(productIndex, 1);
  }

}

import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
    },
  ];

  getAll(): Product[] {
    const productsResult = this.products;
    return productsResult;
  }
  getOne(id: number): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product id Nº${id} not found`);
    }
    return product;
  }
  create(payload): any {
    return {
      message: 'created',
      payload,
    };
  }
  update(id, payload) {
    return {
      message: 'updated',
      payload,
    };
  }
  delete(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new HttpException('Id not found', HttpStatus.BAD_REQUEST);
    }
    return {
      message: 'deleted',
      id,
    };
  }
}

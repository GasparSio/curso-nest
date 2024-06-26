import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Product } from './entities/product.entity';
import { createProductDto, updateProductDto } from './dto/product.dto';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
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
  create(payload: createProductDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id, payload: updateProductDto) {
    const product = this.getOne(id);
    const index = this.products.findIndex((product) => product.id === id);
    if (product) {
      this.products[index] = {
        ...product,
        ...payload,
      };
    }
    return this.products[index];
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

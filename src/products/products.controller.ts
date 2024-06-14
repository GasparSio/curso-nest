import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Get('products')
  // getProducts(): string {
  //   return 'Hello from the products endpoint!';
  // }
  @Get('products')
  getProductsWithDiferentQuerys(
    @Query('limit') limit: number = 100, //el 100 es el default value
    @Query('offset') offset: number = 0, //el 0 es el default value
  ): string {
    return `Hello from the products endpoint! With limit: ${limit} and offset: ${offset}`;
  }
  //endpoint with only ONE parameter
  @Get('products/:productId')
  getOneProduct(@Param('productId') productId: string): string {
    return `Product with id ${productId}`;
  }
}

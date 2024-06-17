import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Get('products')
  // getProducts(): string {
  //   return 'Hello from the products endpoint!';
  // }
  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(
    @Query('limit') limit: number = 100, //el 100 es el default value
    @Query('offset') offset: number = 0, //el 0 es el default value
  ): Promise<any> {
    const products = await this.productsService.getAll(limit, offset);
    return products;
  }

  //endpoint with only ONE parameter
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  async getOne(@Param('productId') productId: string): Promise<string> {
    const product = await this.productsService.getOne(productId);
    return product;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: any): Promise<any> {
    const newProduct = await this.productsService.create(payload);
    return newProduct;
  }
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() payload: any): Promise<any> {
    const productUpdated = await this.productsService.update(id, payload);
    return productUpdated;
  }
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: string): Promise<any> {
    const productDeleted = await this.productsService.delete(id);
    return productDeleted;
  }
}

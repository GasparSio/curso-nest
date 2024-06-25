import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpStatus,
  HttpCode,
  HttpException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
import { createProductDto, updateProductDto } from './dto/product.dto';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Get('products')
  // getProducts(): string {
  //   return 'Hello from the products endpoint!';
  // }
  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(): Promise<any> {
    const products = await this.productsService.getAll();
    return products;
  }

  //endpoint with only ONE parameter
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  async getOne(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<Product> {
    const product = await this.productsService.getOne(productId);
    return product;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: createProductDto): Promise<any> {
    const newProduct = await this.productsService.create(payload);
    return newProduct;
  }
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: number,
    @Body() payload: updateProductDto,
  ): Promise<updateProductDto> {
    const product = await this.productsService.getOne(id);
    if (product) {
      const productUpdated = await this.productsService.update(id, payload);
      return productUpdated;
    }
  }
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: string): Promise<any> {
    if (!id) {
      throw new HttpException('Id not found', HttpStatus.BAD_REQUEST);
    }
    const productDeleted = await this.productsService.delete(id);
    return productDeleted;
  }
}

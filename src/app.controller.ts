import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new')
  newEndpoint(): string {
    return 'New endpoint!';
  }

  @Get('products')
  getProducts(): string {
    return 'Hello from the products endpoint!';
  }
  //endpoint with only ONE parameter
  @Get('products/:productId')
  getOneProduct(@Param('productId') productId: string): string {
    return `Product with id ${productId}`;
  }
  //endpoint with TWO parameters
  @Get('categories/:categoryId/products/:productId')
  getCategoryAndProduct(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ): string {
    return `Product with id ${productId} from category with id ${categoryId}`;
  }
}

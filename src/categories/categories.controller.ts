import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  //endpoint with TWO parameters
  @Get(':categoryId/products/:productId')
  getCategoryAndProduct(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ): string {
    return `Product with id ${productId} from category with id ${categoryId}`;
  }
}

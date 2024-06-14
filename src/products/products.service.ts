import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getAll(limit, offset): any {
    return {
      message: `Hello from the products endpoint! With limit: ${limit} and offset: ${offset}`,
    };
  }
  getOne(productId): string {
    return `Hello from the products endpoint! With productId: ${productId}`;
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
    return {
      message: 'deleted',
      id,
    };
  }
}

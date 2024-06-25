export class createProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
}

export class updateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
}

import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  //to add a new product
  constructor(private readonly productService: ProductsService) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generatedId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }
  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }
  @Get(':id')
  getProduct(@Param('id') proId: string) {
    return this.productService.getSingleProduct(proId);
  }
  //   @Patch(':id')
  //   updateProduct()
  //   {

  //   }
}

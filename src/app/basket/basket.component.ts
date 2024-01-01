import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/entity';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductDTO } from '../../entities/productDTO';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  basketItems: Product[] = [];
  basketListItems: ProductDTO[] = [];
  totalPrice: number = 0;
  totalAmount: number = 0;

  getProducts() {
    this.productService.getData().subscribe((data) => {
      this.basketItems = data;
    });
  }

  addToBasket(item: Product) {
    const existingProduct = this.basketListItems.find(
      (element) => element.id === item.id
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      const addedQuantity = {
        id: item.id,
        name: item.name,
        price: item.price,
        stock: item.stock,
        quantity: 1,
      };

      this.basketListItems.push(addedQuantity);
    }
  }

  increment(id: number) {
    const product = this.basketListItems.find((product) => product.id === id);
    if (product) {
      product.quantity += 1;
    }
  }

  decrement(id: number) {
    const product = this.basketListItems.find((product) => product.id === id);
    if (product && product.quantity > 1) {
      product.quantity -= 1;
    } else {
      this.basketListItems = this.basketListItems.filter(
        (element) => element.id !== product?.id
      );
    }
  }

  calcQuantity() {
    this.totalAmount = this.basketListItems.reduce(
      (amount, currentvalue) => currentvalue.quantity + amount,
      0
    );
  }

  calcTotalPrice() {
    this.totalPrice = this.basketListItems.reduce(
      (amount, currentvalue) =>
        currentvalue.price * currentvalue.quantity + amount,
      0
    );
  }

  calculations() {
    this.calcQuantity();
    this.calcTotalPrice();
  }
}

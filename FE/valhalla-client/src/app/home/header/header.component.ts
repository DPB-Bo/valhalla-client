import {Component, OnInit} from '@angular/core';
import {ProductCartDto} from '../../dto/product/product-cart-dto';
import {ProductCartService} from '../../service/product/product-cart/product-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  productCartDto: ProductCartDto[] = [];
  totalQuantityProduct = 0;

  constructor(private productCartService: ProductCartService) {
    this.productCartService.getCartItems().subscribe(data => {
      this.productCartDto = data;
      this.totalQuantityProduct = 0;
      this.productCartDto.forEach(item => {
        this.totalQuantityProduct += item.quantity;
      });
    });
  }

  ngOnInit(): void {
  }

  logCart(): void {
  }
}

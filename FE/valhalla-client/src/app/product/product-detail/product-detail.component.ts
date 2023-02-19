import {Component, OnInit} from '@angular/core';
import {ProductCartService} from '../../service/product/product-cart/product-cart.service';
import {ProductCartDto} from '../../dto/product/product-cart-dto';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  constructor(private productCartService: ProductCartService, private toastService: ToastrService) {
  }

  ngOnInit(): void {
  }

  addToCart(idProduct: number): void {
    const productCartDto: ProductCartDto = {id: idProduct, quantity: 1};
    this.productCartService.addToCart(productCartDto);
    this.toastService.success('Đã thêm vào giỏ hàng', 'Thành công');
  }
}

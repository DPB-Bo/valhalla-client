import {Injectable} from '@angular/core';
import {ProductCartDto} from '../../../dto/product/product-cart-dto';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private tempListProductCartDto: ProductCartDto[] = [];
  private cartSubject = new BehaviorSubject<ProductCartDto[]>([]);

  constructor() {
    const cartDate = localStorage.getItem('cart');
    if (cartDate) {
      this.tempListProductCartDto = JSON.parse(cartDate);
    }
    this.cartSubject.next(this.tempListProductCartDto);
  }

  public addToCart(productCartDto: ProductCartDto): void {
    const itemIndex = this.tempListProductCartDto.findIndex((cartItem: any) => cartItem.id === productCartDto.id);
    if (itemIndex === -1) {
      // If the item doesn't exist, add it to the cart with a quantity of 1
      this.tempListProductCartDto.push(productCartDto);
    } else {
      // If the item already exists, increase the quantity by 1
      this.tempListProductCartDto[itemIndex].quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(this.tempListProductCartDto));
    this.cartSubject.next(this.tempListProductCartDto);
  }

  public getCartItems(): Observable<ProductCartDto[]> {
    return this.cartSubject.asObservable();
  }

  public clearCart(): void {
    this.tempListProductCartDto = [];
    localStorage.setItem('cart', JSON.stringify(this.tempListProductCartDto));
    this.cartSubject.next(this.tempListProductCartDto);
  }
}

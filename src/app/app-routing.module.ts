import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'product', loadChildren: () => import('./product/product.module').then(module => module.ProductModule)},
  {path: 'cart', loadChildren: () => import('./cart/cart.module').then(module => module.CartModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

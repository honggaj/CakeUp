import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { ComboDealsComponent } from './pages/combo-deals/combo-deals.component';
import { CustomCakeComponent } from './pages/custom-cake/custom-cake.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { TrackOrderComponent } from './pages/track-order/track-order.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
{ path: 'custom-cake', component: CustomCakeComponent },
{ path: 'combo-deals', component: ComboDealsComponent },
{ path: 'reviews', component: ReviewsComponent },
{ path: 'track-order', component: TrackOrderComponent },

  // nếu có đăng nhập:
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'my-orders', component: UserOrdersComponent },

  // fallback
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

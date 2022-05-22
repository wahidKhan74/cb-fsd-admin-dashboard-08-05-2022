import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { UsersComponent } from './components/users/users.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderCreateComponent } from './components/orders/order-create/order-create.component';
import { OrderViewComponent } from './components/orders/order-view/order-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductCreateComponent,
    UsersComponent,
    UserCreateComponent,
    UserProfileComponent,
    OrdersComponent,
    OrderCreateComponent,
    OrderViewComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

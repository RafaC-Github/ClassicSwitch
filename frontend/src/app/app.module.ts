import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SearchProductsComponent } from './containers/search-products/search-products.component';
import { ConfirmedComponent } from './containers/user/confirmed/confirmed.component';
import { LoginComponent } from './containers/user/login/login.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { HomeComponent } from './containers/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    SearchProductsComponent,
    ConfirmedComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

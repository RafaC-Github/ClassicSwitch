import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/user/login/login.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { HomeComponent } from './containers/home/home.component';
import { SearchProductsComponent } from './containers/search-products/search-products.component';
import { ConfirmedComponent } from './containers/user/confirmed/confirmed.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products/search/:searchValue', component: SearchProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/confirmado/:token', component: ConfirmedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

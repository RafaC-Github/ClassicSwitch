import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public products = [];
  public productsFiltered = [];
  public exchangeRates$: Observable<any>;
  public categories$: Observable<any>;
  public currency = 'EUR';
  public orderBy = 'name';
  constructor(public productService: ProductService, public categoryService: CategoryService) { }
  ngOnInit(): void {
    this.productService.getAll().
      subscribe(res => {
        this.products = res;
        this.productsFiltered = res;
      });
    this.exchangeRates$ = this.productService.getExchangeRates();
    this.categories$ = this.categoryService.getAll();
  }
  order(value) {
    const key = value.split(',')[0];
    const order = value.split(',')[1];
    if (value === 'name') {
      this.products.sort((a, b) => ('' + b.name).localeCompare(a.name));
    } else {

      this.products.sort((a, b) => a[key] - b[key]);
    }
    if (order === 'desc') {
      this.products.reverse();
    }
  }
  filterByCategory(categoryId) {
    if (+categoryId === 0) {
      return this.productsFiltered = this.products;
    }
    this.productsFiltered = this.products.filter(p => p.CategoryId === +categoryId);
  }
  ngOnDestroy() {
    console.log('Home destruido');
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsbackup;
  product;
  public products = [];
  public productsFiltered = [];
  public exchangeRates$: Observable<any>;
  public categories$: Observable<any>;
  public currency = 'EUR';
  public orderBy = 'name';
  constructor(public productService: ProductService, public categoryService: CategoryService, public route: ActivatedRoute) { }
  ngOnInit(): void {
    this.productService.getAll().
      subscribe(res => {
        this.productsbackup= res;
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
  }

getTrailer = (product) => {
 document.querySelector(".videoyt").innerHTML= '<iframe width="560" height="315" src=\"' + product.youtubelink + '\" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
 document.querySelector(".imagemodal").innerHTML= '<img class="imagendelmodal" src=\"'+ product.image_path + '\">';
 document.querySelector(".modal-footer").innerHTML= '<p>'+product.description+'</p>';
 document.querySelector(".modal-header").innerHTML= '<h5 class="modal-title" id="exampleModalLabel">'+product.name+'</h5>';

 console.log(product);
        
}



searchProducts(event) {
  console.log(event);
  if (!event) {this.products = this.productsbackup}
  const result= this.products.filter(product=> product.name.toLowerCase().includes(event.toLowerCase()))
  console.log(result)

  this.products = result;
  
}
}

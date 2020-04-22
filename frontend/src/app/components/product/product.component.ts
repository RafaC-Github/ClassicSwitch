import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges {
  @Input() public product: any;
  @Input() public rate: number;
  @Input() public currency: string;
  constructor() { }

  ngOnChanges() {
    // console.log('on changes', this.product, this.rate, this.currency);
  }
}


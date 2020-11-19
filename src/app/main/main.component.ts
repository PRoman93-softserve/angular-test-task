import {Optional, Output} from '@angular/core';
import {Component, EventEmitter, OnInit} from '@angular/core';
import {ProductsService} from '../shared/services/products.service';

export type ProductType = {
  in_potential_products: boolean,
  asin: string,
  price: number,
  weight: number,
  updated_at: number,
  name: string,
  shipping_weight?: number,
  domain: string,
  votes_count: number,
  daily_cashflow: number,
  currency: string,
  img: string,
  daily_sales: number,
  stars: number,
  bsr_value: number,
  brand_class?: string,
  size: number[] | null[],
  link: string,
  bsr_category: string,
  brand: string
}
export type DataType = {
  count_products: number,
  page_count: number,
  page: number
  products: ProductType[]
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data: DataType[];
  products: ProductType[] = [];
  value = '';

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe((res) => {
        this.products = res.products;
      });

  }

  receiveMessage($event) {
    this.value = $event;
  }

  filterMethod() {

    return this.value ? this.products.filter((el: ProductType) => el.name.includes(this.value)) : this.products;
  }

}

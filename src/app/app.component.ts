import {Component} from '@angular/core';


type ProductType = {
  in_potential_products:boolean,
  asin:string,
  price:number,
  weight:number,
  updated_at:number,
  name:string,
  shipping_weight?:number,
  domain:string,
  votes_count:number,
  daily_cashflow:number,
  currency:string,
  img:string,
  daily_sales:number,
  stars:number,
  bsr_value:number,
  brand_class?:string,
  size:number[] | null[],
  link:string,
  bsr_category:string,
  brand:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appTitle = 'Angular';
  inputValue = '';
}


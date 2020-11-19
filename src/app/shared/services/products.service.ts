import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataType} from '../../main/main.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {

  }

  getProducts() {
    return this.http.get<DataType>(`https://demo4233545.mockable.io/products`);
  }
}
